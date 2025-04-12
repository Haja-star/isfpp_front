import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Routes, Route, useLocation, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Enseignants from "./pages/Enseignants/Enseignants";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
/* Login And Admin */
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

/* components */
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

/* protection Route */
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "./pages/Spinner/Spinner";
import image from "./utils/images/logo-isfpp_1.png";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fakeDataFetch();
  }, []);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Acceuil | Découvrez notre mission</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>
      {/* Affiche le Navbar uniquement si on n'est pas sur la page login */}
      {location.pathname !== "/login" && location.pathname !== "/admin" && (
        <Navbar
          expand="lg"
          className="position-fixed navbar top-0 start-0 w-100 shadow-sm"
          style={{
            backgroundColor: isScrolled
              ? "rgba(0, 0, 0, 0.45)"
              : "rgba(0, 0, 0, 0.25)",
            backdropFilter: isScrolled ? "blur(50px)" : "none",
            transition:
              "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
            zIndex: 1030,
          }}
        >
          {" "}
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <img src={image} width="48" height="48" alt="Backpack Icon" />
                <span className="mx-2 text-light lh-1 fw-semibold">
                  I.S.F.P.P
                  <br />
                  Madagascar
                  <br />
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end w-100">
                <div className="d-flex gap-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? "active" : ""}`
                    }
                  >
                    Page d'accueil
                  </NavLink>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? "active" : ""}`
                    }
                  >
                    Nos Formations
                  </NavLink>
                  <NavLink
                    to="/enseignants"
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? "active" : ""}`
                    }
                  >
                    Nos Enseignants
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? "active" : ""}`
                    }
                  >
                    À Propos
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `nav-link-custom ${isActive ? "active" : ""}`
                    }
                  >
                    Entrer en Contact
                  </NavLink>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {loading ? (
        <Spinner />
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enseignants" element={<Enseignants />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={<ProtectedRoute element={<Admin />} />}
            />
          </Routes>
        </>
      )}

      {/* Affiche le footer uniquement si on n'est pas sur la page login */}
      {location.pathname !== "/login" && location.pathname !== "/admin" && (
        <footer className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              {/* Colonne gauche - Bouton de contact & Réseaux sociaux */}
              <div className="col-md-4 text-center text-md-start">
                <div className="gauche-text">
                  <h2 className="display-10">Mentions légales</h2>
                  <p>NIF: 2002 254 036</p>
                  <p>STAT: 85 499 23 2016 0 001 78</p>
                  <p>Arrêté d'habillitation N°32.794/2015 MEsupRES</p>
                  <p>Vu l'Arrêté N° 17 446/2016 CNEAT du 04 Février 2016</p>
                </div>
                <Link to="/contact">
                  <button
                    // data-aos="fade-down"
                    type="button"
                    className="btn btn-lg mb-4"
                    style={{
                      color: "#0d47a1",
                      borderColor: "#0d47a1",
                      backgroundColor: "transparent",
                    }}
                  >
                    Entrer en Contact
                  </button>
                </Link>
              </div>
              {/* Colonne droite - Navigation et contact */}
              <div className="col-md-7 col-lg-6">
                <div className="row justify-content-between">
                  {/* Navigation */}
                  <div className="col-md-6">
                    <h2 className="text-left text-xl text-gray-800 mb-8 style-text">
                      Navigation
                    </h2>
                    <ul className="footer-navigation list-unstyled text-start">
                      <li className="mb-3">
                        <Link
                          to="/"
                          className="footer-link text-dark no-underline"
                        >
                          Page d'accueil
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          to="/courses"
                          className="footer-link text-dark no-underline"
                        >
                          Nos Formations
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          to="/enseignants"
                          className="footer-link text-dark no-underline"
                        >
                          Nos Enseignants
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          to="/about"
                          className="footer-link text-dark no-underline"
                        >
                          À Propos
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          to="/contact"
                          className="footer-link text-dark no-underline"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Informations de contact */}
                  <div className="col-md-6">
                    <h2 className="text-left text-xl text-gray-800 mb-8 style-text">
                      Contact
                    </h2>
                    <ul className="list-unstyled text-start">
                      <li className="mb-3 d-flex align-items-center">
                        <div
                          style={{ backgroundColor: "#085E83" }}
                          className="bg-opacity-85 p-3 rounded shadow-md me-2"
                        >
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="text-light fs-5"
                          />
                        </div>
                        Mahamasina vers Route IFIRP Befelatanana
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div
                          style={{ backgroundColor: "#085E83" }}
                          className="bg-opacity-85  p-3 rounded shadow-md me-2"
                        >
                          <FontAwesomeIcon
                            icon={faPhoneAlt}
                            className=" text-light fs-5"
                          />
                        </div>
                        +261 34 22 000 04
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div
                          style={{ backgroundColor: "#085E83" }}
                          className="bg-opacity-85 p-3 rounded shadow-md me-2"
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className=" text-light fs-5"
                          />
                        </div>
                        <a
                          href="mailto:direction.isfpp@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark text-decoration-none"
                        >
                          direction.isfpp@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <div
                          style={{ backgroundColor: "#085E83" }}
                          className="bg-opacity-85 p-3 rounded shadow-md me-2"
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-light fs-5"
                          />
                        </div>
                        <a
                          href="https://www.facebook.com/profile.php?id=100086873171877"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark text-decoration-none"
                        >
                          ISFPP Mada
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-body-tertiary"
            style={{ paddingTop: "5px", borderTop: "2px solid #888" }}
          >
            <div className="container">
              <p className="p-3 m-0 text-center">
                © 2025- ISFPP Mada. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
