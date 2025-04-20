import React, { useEffect, useState, useRef , useLayoutEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../pages/Spinner/Spinner";
import { Helmet } from "react-helmet";
import arrow from "../../assets/up-arrow.png";
import BlogBanner from "../../utils/images/blogs_details.webp";
import ArticleLoader from "../../components/ArticleLoader/ArticleLoader";
import { HiArrowUp } from "react-icons/hi";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("fr-FR", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [cardHeight, setCardHeight] = useState("520px");
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Récupération du blog spécifique
    fetch(`https://backend.isfpp.com/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Erreur API :", error));

    // Récupération des blogs récents
    fetch(`https://backend.isfpp.com/blog`)
      .then((response) => response.json())
      .then((data) => setRecentBlogs(data))
      .catch((error) => console.error("Erreur API blogs récents :", error));
  }, [id]);

  // useEffect(() => {
  //   const section = document.getElementById("details-content");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "auto" });
  //   }
  // }, []);

  //   // Effect to adjust the card height based on left column height
  //   useEffect(() => {
  //     if (!blog) return;

  //     // Function to update the card height
  //     const updateCardHeight = () => {
  //       if (leftColumnRef.current && rightColumnRef.current) {
  //         // Get the height of the left column
  //         const leftColumnHeight = leftColumnRef.current.offsetHeight;

  //         // Adjust for the header text in the right column (subtract its height)
  //         const rightColumnHeaderHeight = 40; // Approximate height of the "Articles récents" heading

  //         // Set the new height for the card body
  //         const newHeight = leftColumnHeight - rightColumnHeaderHeight;
  //         // setCardHeight(`${newHeight}px`);
  //       }
  //     };

  //     // Clean up event listener
  //     return () => window.removeEventListener("resize", updateCardHeight);
  //   }, [blog, recentBlogs]);

  //scrol directly to the section detail
  useEffect(() => {
    if (blog) {
      const section = document.getElementById("details-content");
      const navbarHeight = -30; // Adjust this to your actual navbar height (in pixels)

      if (section) {
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: y,
          behavior: "auto",
        });
      }
    }
  }, [blog]);

  if (!blog) {
    return <Spinner />;
  }

  return (
    <div className="page-container">
      <Helmet>
        <title>Activités Détails | ISFPP</title>
        <meta
          name="description"
          content="Découvrez nos événements et formations à l'ISFPP."
        />
      </Helmet>

      <header
        className="blog-header d-flex align-items-center text-light"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.6), rgba(5, 10, 35, 0.6)), url(${BlogBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container text-center">
          <h1 data-aos="fade-down">Nos Activités</h1>
          <p className="w-75 mx-auto">
            Découvrez nos événements et formations animés par des experts pour
            enrichir vos compétences.
          </p>
        </div>
      </header>

      {/* Bouton flottant pour ouvrir la fenêtre contextuelle */}
      <div
        className="floating-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiArrowUp style={{ color: "white", fontSize: "24px" }} />
      </div>

      {/* Conteneur flexbox pour afficher l'article sélectionné et les articles récents */}
      <div className="container mt-4" id="details-content">
        <div className="row">
          {/* Article principal (image plus grande) */}
          <div className="text-center mb-3">
            <h2>Actualités</h2>
            <span>
              Restez connecté à l'actualité ! Découvrez nos dernières nouvelles,
              suivez les tendances du moment et explorez des sujets variés – de
              la culture aux technologies – pour ne rien manquer de ce qui fait
              bouger le monde.
            </span>
          </div>
          <div className="col-md-8" ref={leftColumnRef}>
            <img
              src={blog.image}
              alt={blog.title}
              className="img-fluid mb-3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <div className="py-3 d-flex gap-2 text-start">
              <div>Pulblié le, </div>
              <strong>
                {blog.createdAt
                  ? formatDate(blog.createdAt)
                  : "Date non disponible"}
              </strong>
            </div>
            <h4 className="text-start">{blog.title}</h4>
            <p className="text-justify">{blog.description}</p>
          </div>

          {/* Articles récents (miniatures) */}
          <div className="col-md-4" ref={rightColumnRef}>
            <h4 className="text-center text-md-start">Articles récents</h4>
            <div className="card border-0">
              <div
                className="card-body"
                style={{ height: cardHeight, overflowY: "auto", padding: 0 }}
              >
                <ul className="list-unstyled">
                  {recentBlogs.length > 0 ? (
                    recentBlogs.map((article) => (
                      <li
                        key={article.id}
                        onClick={() => navigate(`/blog/${article.id}`)}
                        className="d-flex align-items-center mb-3"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="img-thumbnail me-1"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="ms-2 text-start d-flex flex-column gap-1 mt-1">
                          <strong className="text-truncate d-block">
                            {blog.title.length > 30
                              ? `${blog.title.substring(0, 30)}...`
                              : blog.title}
                          </strong>
                          <p
                            className="mb-0 text-truncate"
                            style={{ maxWidth: "299px" }}
                          >
                            {article.description}
                          </p>
                          <p className="mb-0">
                            📅{" "}
                            {article.createdAt
                              ? formatDate(article.createdAt)
                              : "Date non disponible"}
                          </p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <ArticleLoader />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
