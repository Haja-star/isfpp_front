import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import arrow from "../../assets/up-arrow.png";
import AboutUsSectionImg from "../../utils/isfpp/sortie.webp";
import ChooserSection from "../../components/ChooserSection/ChooserSection";
import Person1 from "../../utils/isfpp/isfpp_mise_diplome.webp";
import Person2 from "../../utils/isfpp/isfpp_diplome.webp";
import Person3 from "../../utils/isfpp/isfpp_gateaux.webp";
import Person4 from "../../utils/isfpp/isfpp_velirano.webp";
import Person5 from "../../utils/isfpp/isfpp_couverture.webp";
import Person6 from "../../utils/isfpp/isfpp_bossy_4.webp";
import Person7 from "../../utils/isfpp/isfpp_bossy_5.webp";
import Person8 from "../../utils/isfpp/isfpp_bossy_6.webp";
import Person9 from "../../utils/isfpp/isfpp_bossy_8.webp";
import { HiArrowUp } from "react-icons/hi";

const persons = [
  { id: 1, img: Person1 },
  { id: 2, img: Person2 },
  { id: 3, img: Person3 },
  { id: 4, img: Person4 },
  { id: 5, img: Person5 },
  { id: 6, img: Person6 },
  { id: 7, img: Person7 },
  { id: 8, img: Person8 },
  { id: 9, img: Person9 },
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function About() {
  return (
    <>
      <Helmet>
        <title>À Propos de Nous | ISFPP</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>
      <div className="about-page">
        <header className="h-100 min-vh-100 d-flex align-items-center text-light">
          <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 data-aos="fade-down" className="text-center fw-semibold">
              A propos de nous
            </h1>
            <p data-aos="fade-up" className="text-center w-75 mb-5">
              Notre mission est de vous accompagner dans votre développement
              professionnel, en vous proposant des formations adaptées aux
              réalités du marché et dispensées par des experts reconnus. Que
              vous soyez étudiant, professionnel en reconversion ou en quête de
              nouvelles compétences, nous sommes là pour vous aider à atteindre
              vos objectifs.
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

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
              <h2
                className="mb-2 mb-lg-3 -mt-5"
                style={{ transform: "translateY(-30px)" }}
              >
                ETUDIEZ AVEC NOUS
              </h2>
              <p
                className="text-justify"
                style={{ transform: "translateY(-20px)" }}
              >
                Étudiez avec nous et accédez à un environnement d’apprentissage
                innovant, conçu pour vous aider à atteindre vos objectifs
                académiques et professionnels. Profitez de ressources
                pédagogiques de qualité, d’un accompagnement personnalisé et
                d’une communauté dynamique pour réussir votre parcours avec
                confiance.
              </p>
              <p
                className="mb-4 mb-lg-5 text-left"
                style={{ transform: "translateY(-20px)" }}
              >
                Bénéficiez d’un accompagnement sur mesure, de formations
                adaptées à vos besoins et d’une équipe pédagogique engagée à
                vous guider vers la réussite. Développez vos compétences grâce à
                des cours interactifs, des projets pratiques et des opportunités
                d’immersion dans le monde professionnel. Rejoignez une
                communauté dynamique où l’échange, la collaboration et
                l’excellence sont au cœur de notre engagement. Avec nous, chaque
                étape de votre parcours est une avancée vers votre avenir.
              </p>
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                  style={{
                    transform: "translateY(-40px)",
                    backgroundColor: "#085E83",
                  }}
                >
                  Contactez-nous
                </button>
              </Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={AboutUsSectionImg}
                className="img-fluids w-75 rounded-xl"
                alt="about_section"
              />
            </div>
          </div>
        </div>

        <div className="bg-dark text-light py-5">
          <ChooserSection />
        </div>

        {/* Section avec animation */}
        <div className="bg-body-tertiary py-5">
          <div className="container">
            <h2 className="text-center mb-3">Notre Success</h2>
            <p className="text-justify">
              {" "}
              Depuis notre lancement, nous avons constamment évolué et surmonté
              les défis pour atteindre de nouveaux sommets. Grâce à une équipe
              passionnée, des partenariats solides et un engagement envers
              l'excellence, nous avons pu accomplir des réalisations
              impressionnantes. Nous avons touché de nombreux clients
              satisfaits, créé des solutions innovantes et renforcé notre
              position de leader dans notre domaine.
              <br />
              Nous sommes fiers de chaque étape de notre parcours et sommes
              déterminés à poursuivre cette trajectoire de succès, en apportant
              toujours plus de valeur et en relevant de nouveaux défis.
            </p>
            <div className="row g-4">
              {persons.map((person, index) => (
                <motion.div
                  key={person.id}
                  className="col-md-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={variants}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={person.img}
                    className="img-fluid"
                    alt="personne_image"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-body-tertiary"
        style={{ paddingTop: "5px", borderTop: "2px solid #888" }}
      ></div>
    </>
  );
}

export default About;
