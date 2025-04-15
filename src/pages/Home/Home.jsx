import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import arrow from "../../assets/up-arrow.png";
import ChooserSection from "../../components/ChooserSection/ChooserSection";
import StartCoursesImg from "../../utils/isfpp/directeur.webp";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card, Button } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../pages/Spinner/Spinner";

import { HiArrowUp } from 'react-icons/hi';

const API_URL = "https://backend.isfpp.com/blog";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const fetchBlogs = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des blogs");
  }
  return res.json();
};

const Home = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    fade: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });

  /*const [blogs, setBlogs] = useState([]);*/
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  useEffect(() => {
    if (blogs && blogs.length == 3) {
      setSliderSettings(prevSettings => ({
        ...prevSettings,
        slidesToShow: 3,
        autoplay: false
      }));
    }
  }, [blogs]);
  
  const handleVoirPlus = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/blog/${blogs.id}`);
    }, 1500); // Durée du spinner avant navigation
  };

  /* Récupération du mot du directeur */
  useEffect(() => {
    fetch("https://backend.isfpp.com/director")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.director_word);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-danger my-5">
        Erreur : {error.message}
      </div>
    );
  }

  return (
    <div className="home-page">
      <Helmet>
        <title>Accueil | ISFPP</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>
      <header className="h-100 min-vh-100 d-flex align-items-center text-light mb-4">
        <div className="container d-flex flex-column align-items-center">
          <h2 data-aos="fade-down">Bienvenue à</h2>
          <h1
            data-aos="fade-left"
            className="text-center fw-semibold display-1"
          >
            I.S.F.P.P{" "}
          </h1>
          <p data-aos="fade-up">
            Notre mission est de former les leaders de demain, encourager la
            curiosité intellectuelle et promouvoir une culture de collaboration
            et d'inclusion. À I.S.F.P.P, les étudiants, les professeurs et les
            anciens élèves forment un réseau mondial influent, dédié à
            l'amélioration du bien-être de la société à travers l'apprentissage,
            le service public et l'innovation.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <a
              href="/courses"
              className="btn btn-custom btn-lg mx-2 my-2"
              data-aos="fade-right"
            >
              Voir nos formations
            </a>
            <a
              href="/contact"
              className="btn btn-outline-light btn-lg mx-2 my-2"
              data-aos="fade-left"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </header>

      <div className="mb-6">
        <ChooserSection />
      </div>

      {/* Mot du directeur - Dynamique */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 data-aos="zoom-in" className="text-left">
                Mot de directeur I.S.F.P.P
              </h2>
              <p data-aos="zoom-in" className="text-justify">
                {message}
              </p>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                data-aos="fade-left"
                src={StartCoursesImg}
                className="img-fluid circular-image"
                alt="Mot_de_directeur"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reste du contenu */}
      <div className="py-5">
        <FaqAccordion />
      </div>

      {/* Bouton flottant pour ouvrir la fenêtre contextuelle */}
      <div
        className="floating-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiArrowUp style={{ color: 'white', fontSize: '24px' }} />
      </div>
    
    {blogs.length > 0 ? (
         <div className="blog-section text-light py-5">
         <div className="container d-flex flex-column align-items-center">
           <h2
             data-aos="fade-down"
             className="text-center text-capitalize mb-3 fs-1"
           >
             Activités récents
           </h2>
           <p className="text-center mb-3">
             Découvrez nos dernières actualités et événements marquants.
           </p>
           <div
             className="position-relative w-100"
             style={{ maxWidth: "2000px" }}
           >
             <Slider {...sliderSettings} data-aos="fade-up">
               {blogs.map((blog, index) => {
                 const isNew =
                   new Date(blog.date) >
                   new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                 return (
                   <div key={blog.id} className="px-3">
                     <Card className="card shadow scale-hover-effect position-relative">
                       {isNew && (
                         <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                           Nouveauté
                         </span>
                       )}
                       <Link to={`/blog/${blog.id}`}>
                         <Card.Img
                           className="card-img-top"
                           variant="top"
                           src={blog.image}
                           alt="Card image"
                           style={{ cursor: "pointer" }}
                         />
                       </Link>
                       <Card.Body className="p-4 card-body-fixed">
                         <Card.Title className="card-title-fixed two-line-ellipsis">
                           {blog.title}
                         </Card.Title>
                         <Card.Text
                           className="card-text-limited text-start two-line-ellipsis"
                           title={blog.description}
                         >
                           {blog.description}
                         </Card.Text>
                         <div className="badge bg-light text-dark p-2 my-2 text-center">
                           📅{" "}
                           {blog.createdAt
                             ? formatDate(blog.createdAt)
                             : "Date non disponible"}
                         </div>
                         <Link to={`/blog/${blog.id}`} className="mt-auto">
                           <Button
                             className="btn-more"
                             style={{
                               backgroundColor: "#085E83",
                               borderColor: "#0d47a1",
                               color: "white",
                             }}
                           >
                             Voir plus
                           </Button>
                         </Link>
                       </Card.Body>
                     </Card>
                   </div>
                 );
               })}
             </Slider>
           </div>
         </div>
       </div>
    ) : ""}
     
    </div>
  );
};

export default Home;
