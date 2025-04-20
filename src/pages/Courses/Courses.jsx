import React from "react";
import "./Courses.css";
import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { HiArrowUp } from "react-icons/hi";
import ArtCourseImg from "../../utils/images/management_admin.webp";
import BusinessCourseImg from "../../utils/images/compta_finance.webp";
import ComputerScienceCourseImg from "../../utils/images/admin_santé.webp";
import EducationCourseImg from "../../utils/images/paramède.webp";
import HealthcareCourseImg from "../../utils/images/comm_marketing.webp";
import LawCourseImg from "../../utils/images/comm_international.webp";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const courses = [
  {
    id: 1,
    img: ArtCourseImg,
    title: "Management et Administration d’Entreprise",
    description:
      "Cette formation prépare les étudiants à gérer et administrer une entreprise ou une organisation. Elle couvre des domaines tels que la gestion des ressources humaines, la stratégie d'entreprise, la finance, le marketing, et la gestion des opérations.",
    pdf: "/docs/management.pdf",
  },
  {
    id: 2,
    img: BusinessCourseImg,
    title: "Comptabilité Financé",
    description:
      "Cette formation se concentre sur la gestion des finances d'une entreprise, la comptabilité, l'audit, et la fiscalité. Les étudiants apprennent à analyser les états financiers, à gérer les budgets, et à prendre des décisions financières stratégiques.",
    pdf: "/docs/comptabilite.pdf",
  },
  {
    id: 3,
    img: ComputerScienceCourseImg,
    title: "Administration Établissement de Santé ",
    description:
      "Cette formation est axée sur la gestion des structures sanitaires (hôpitaux, cliniques, etc.). Elle aborde des sujets comme la gestion des ressources humaines dans le secteur de la santé, la planification des soins, la gestion des budgets, et la réglementation sanitaire.",
    pdf: "/docs/sante.pdf",
  },
  {
    id: 4,
    img: EducationCourseImg,
    title: "Paramédicaux",
    description:
      "Les formations paramédicales préparent les étudiants à des métiers de soutien médical, comme infirmier, kinésithérapeute, ambulancier, ou technicien de laboratoire. Ces programmes combinent des connaissances théoriques en médecine et des compétences pratiques.",
    pdf: "/docs/paramed.pdf",
  },
  {
    id: 5,
    img: HealthcareCourseImg,
    title: "Communication et Marketing",
    description:
      "Cette formation vise à développer des compétences en communication interne et externe, en stratégie marketing, et en gestion de la relation client. Les étudiants apprennent à créer des campagnes publicitaires, à gérer les médias sociaux, et à analyser les comportements des consommateurs.",
    pdf: "/docs/marketing.pdf",
  },
  {
    id: 6,
    img: LawCourseImg,
    title: "Marketing et Commerce International",
    description:
      "Cette formation se concentre sur les stratégies de marketing à l'international et la gestion des échanges commerciaux entre pays. Elle aborde des sujets comme le commerce international, les études de marché, la gestion des exportations, et le marketing interculturel.",
    pdf: "/docs/commerce.pdf",
  },
];

function Courses() {
  return (
    <div className="courses-page">
      <Helmet>
        <title>Nos Formations | ISFPP</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>

      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 data-aos="fade-down" className="text-center fw-semibold">
            Nos offres de formations
          </h1>
          <p data-aos="fade-up" className="text-center w-75 mb-5">
            Découvrez nos formations conçues pour répondre aux besoins des
            professionnels de demain. Que vous souhaitiez vous spécialiser en
            Management, en Comptabilité, en Santé, ou en Marketing, nous vous
            proposons des programmes complets et adaptés à vos ambitions. Nos
            formations allient théorie et pratique, avec un accompagnement
            personnalisé pour vous aider à atteindre vos objectifs.
          </p>
        </div>
      </header>

      {/* Bouton flottant pour remonter */}
      <div
        className="floating-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiArrowUp style={{ color: "white", fontSize: "24px" }} />
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="title_h1 text-center mb-5">
            <h1>Quelques formations offrons-nous</h1>
            <p>
              Explorez notre large choix de formations adaptées à vos besoins
              professionnels et académiques.
            </p>
          </div>

          {courses.map((course) => (
            <div key={course.id} className="col-lg-6 mb-4">
              <Card
                data-aos="flip-left"
                className="text-white shadow scale-hover-effect"
              >
                <Card.Img src={course.img} alt="formation_image" />
                <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5 text-center">
                  <Card.Title
                    className="fs-2"
                    style={{
                      color: "#F5F5DC",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {course.title}
                  </Card.Title>
                  <Card.Text className="text-justify">
                    {course.description}
                  </Card.Text>

                  {course.pdf && (
                    <a
                      href={course.pdf}
                      download
                      className="btn btn-light mt-3"
                      style={{
                        backgroundColor: "#f5f5dc",
                        color: "#333",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
                    >
                      📄 Télécharger la brochure
                    </a>
                  )}
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Courses;
