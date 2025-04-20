import React from "react";
import "./Enseignants.css";
import { Helmet } from "react-helmet-async";
import aos from "aos";
import arrow from "../../assets/up-arrow.png";
import Professeur1 from "../../utils/images/anonyme.webp";
import Professeur2 from "../../utils/images/anonyme.webp";
import Professeur3 from "../../utils/images/anonyme.webp";
import Professeur4 from "../../utils/images/anonyme.webp";
import Professeur5 from "../../utils/images/anonyme.webp";
import { HiArrowUp } from "react-icons/hi";

const Enseignants = () => {
  return (
    <div className="professeur-page">
      <Helmet>
        <title>Nos Enseignants | ISFPP</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1
            data-aos="fade-down"
            class="aos-init aos-animate"
            className="text-center fw-semibold"
          >
            Quelques enseignants
          </h1>
          <p data-aos="fade-up" className="text-center w-75 mb-5">
            Découvrez des profils variés, allant des professionnels reconnus
            dans le secteur de la santé aux spécialistes du marketing
            international, en passant par des consultants en gestion
            d’entreprise. Leur mission : vous transmettre les compétences et les
            connaissances nécessaires pour exceller dans votre domaine.
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
          <div className="col text-center">
            <h1>Les enseignants permanents</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div data-aos="fade-right" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur1}
                  className="img-fluid"
                  alt="Professeur1"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RASAMOELINA Henri</b>
                <span className="p-role">
                  Université de Fianarantsoa - Diplôme H.D.R en Sociologie
                </span>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur2}
                  className="img-fluid"
                  alt="Professeur2"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RANDRIAMPARANY Orné</b>
                <span className="p-role">
                  ISFPP MADA - Docteur en Sciences de l’Éducation - Cours
                  théorique (CT) TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur3}
                  className="img-fluid"
                  alt="Professeur3"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>ANDRIANARIVO SEHEVA Alisem</b>
                <span className="p-role">
                  Consultant OMS Antananarivo - Doctorat de recherche (PHD) en
                  Santé
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur4}
                  className="img-fluid"
                  alt="Professeur4"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAHELIARIVOLASOA Saholitiana</b>
                <span className="p-role">
                  MESUPRES Chercheur enseignant - Docteur Sciences de
                  l’enseignement
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur5"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RASAMBANY Alain Désire</b>
                <span className="p-role">
                  Université Toliara - Docteur en Management - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur6"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>JOASITERA Dubieuf Jacquis</b>
                <span className="p-role">
                  Université Antananarivo - DEA ES- Sciences Economique
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur7"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>ANDRIAMAROLAHY Rampanjato</b>
                <span className="p-role">
                  Cabinet Hb - Doctorat en Gestion et Management - TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur8"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFIMANDIMBY O. Steward</b>
                <span className="p-role">
                  Université d'Antananarivo - Docteur en Gestion
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur9"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RANDRIAFANOMEZANTSOA Ernesto</b>
                <span className="p-role">
                  USAID Manakara - Docteur en Urgentiste - Cours théorique (CT)
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur10"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>TSITOHERY Christophe</b>
                <span className="p-role">
                  Coordonnateur OMS Majunga - Doctorat PHD - Cours théorique
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur11"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFIMAMONJY Jean Berger</b>
                <span className="p-role">
                  ISFPP MADA - Doctorat en Management - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur12"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>TOVOHERY Josoa Michel</b>
                <span className="p-role">
                  ESP Antsiranana - Doctorat en Informatique - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur13"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>TATATSIRESY Andrianiaina Jean </b>
                <span className="p-role">
                  Université Fianarantsoa - Doctorat - CM TD TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur14"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>Dr RANDRIANASOLO Jean de Dieu</b>
                <span className="p-role">
                  Inspnmad - Docteur en Management - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur15"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFIARIMANANA Haingo Nirina</b>
                <span className="p-role">
                  ISFPP MADA - D.E.A de lettre et sciences
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur16"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTONIRIANA Bona Michel</b>
                <span className="p-role">
                  ISFPP MADA - Doctorat en Informatique
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur17"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>ARRIVE Tsitaire Jean</b>
                <span className="p-role">
                  Faculte DEGSS Toliara - Doctorat sciences gestion
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur18"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>Zafimahatradraibe Jérôme</b>
                <span className="p-role">
                  ISFPP MADA - Docteur en Management - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur19"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>NOMENJANAHARY Onitiana</b>
                <span className="p-role">
                  ISFPP MADA - DEA « Communication et Dynamique locale »
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur20"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>NAMASY Maurille</b>
                <span className="p-role">
                  USAID Fitovinagny - Docteur Santé Publique - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur21"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAKATIANA Martial</b>
                <span className="p-role">
                  Université de Fianarantsoa - DEA en Informatique - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur22"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTONARIVO Jean Josoa</b>
                <span className="p-role">
                  Université d'Antananarivo - Doctorant en Management
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur23"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAMIANDRISOA Bruno</b>
                <span className="p-role">
                  Directeur ONG PIVOT IFANADIANA - Docteur Diplômé d’Etat,
                  Chirurgie essentielle
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur24"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RASOANIRINA Emma Lucie Amelie</b>
                <span className="p-role">
                  CHU Andohatampenaka - Docteur en Sociologie - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur25"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>HANITRINIAINA Zafindraibe Martine</b>
                <span className="p-role">
                  DRSP 7V - Docteur en Economie - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur26"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RASOLOFOMANANA Léonide</b>
                <span className="p-role">
                  UCM Ambatoroka - D.E.A - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur27"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>LAHINIRINA Razafitia</b>
                <span className="p-role">
                  Université Fianarantsoa - Docteur en droit
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur28"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTONANDRASANA Niry Hasina</b>
                <span className="p-role">
                  ISFPP MADA - Master en communication
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur29"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTONDRAZAFY Tolotra</b>
                <span className="p-role">
                  ISFPP Manakara - Master en science sociale
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur30"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTOSALAMA Mickael Jeannot</b>
                <span className="p-role">
                  ISFPP MADA - Master 2 Economie du Développement
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur31"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFITSIBOZIKY Adrien</b>
                <span className="p-role">
                  ISFPP MADA - Master recherche en administration
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur32"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFINIAINA Bereziky</b>
                <span className="p-role">
                  ISFPP MADA - Master en éducation, formation d’adulte
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur33"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>LEMAINTY François Jean Aime</b>
                <span className="p-role">
                  ISFPP MADA - Master en science société économie - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur34"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAKOTOARISOA Harilala Julien</b>
                <span className="p-role">
                  ISFPP MADA - Ingénieur en télécommunication et réseau - CM,
                  TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur35"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFINDRABE Lucie Mickaelle</b>
                <span className="p-role">
                  ISFPP MADA - Master ES . sciences ECONOMIE - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur36"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>MAMPIANDRARIZAKA Fideline</b>
                <span className="p-role">
                  Univeriste Mahajanaga - Master Géologie Muséologie - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur37"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFITIAMANANA Maximilien</b>
                <span className="p-role">
                  ISFPP Manakara - Master en Management
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur38"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RABEMIAKATRA Yvanot Fortunat</b>
                <span className="p-role">
                  ISFPP Manakara - Master en sciences agronomie - CM, TD
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur39"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAMONTARIVONY Nambinina</b>
                <span className="p-role">
                  ISFPP MADA - Master Anthropologie - CM, TD, TP
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur40"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RANDRIANADRASANA Claude</b>
                <span className="p-role">
                  ISFPP Manakara - Master Professionnel en sciences éducation
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur41"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RONDRONANTENAINA Toria</b>
                <span className="p-role">
                  ISFPP MADA - Master Finance et comptabilité
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur42"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RANDRIAMANANTENA Heriniaina</b>
                <span className="p-role">
                  ISFPP MADA - Master Comptabilité - ET-ED
                </span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3 p-3">
            <div className="p-card">
              <div className="p-cover overflow-hidden">
                <img
                  src={Professeur5}
                  className="img-fluid"
                  alt="Professeur43"
                />
              </div>
              <div className="p-info d-flex justify-content-center align-items-center gap-2 mt-2 flex-wrap">
                <b>RAZAFIDRALAHY dauphin</b>
                <span className="p-role">
                  ISFPP MADA - Master en Droit - CM, TD, TP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enseignants;
