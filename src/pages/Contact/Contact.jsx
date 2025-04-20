import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import arrow from "../../assets/up-arrow.png";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Card, CardBody } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    adresse: "",
    localisation: "Antananarivo",
    code_postal: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://backend.isfpp.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message envoyé avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          adresse: "",
          localisation: "Antananarivo",
          code_postal: "",
          message: "",
        });
      } else {
        setErrorMessage("Erreur lors de l’envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Impossible de contacter le serveur.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contactez-nous | ISFPP</title>
        <meta
          name="description"
          content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts."
        />
      </Helmet>

      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 data-aos="fade-down" className="text-center fw-semibold">
            Entrer en Contact
          </h1>
          <p data-aos="fade-up" className="text-center w-75 mb-5">
            Vous avez des questions ou souhaitez en savoir plus sur nos
            formations ? Nous sommes à votre écoute ! Que ce soit pour obtenir
            des informations sur nos programmes, discuter de vos projets
            professionnels ou planifier un rendez-vous, notre équipe est là pour
            vous accompagner. N’hésitez pas à nous contacter par téléphone, par
            e-mail ou via notre formulaire en ligne. Nous nous engageons à vous
            répondre dans les plus brefs délais. À très bientôt !
          </p>
        </div>
      </header>

      {/* Bouton flottant pour ouvrir la fenêtre contextuelle */}
      <div
        className="floating-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <HiArrowUp style={{ color: 'white', fontSize: '24px' }} />
      </div>

      <div className="title_h1">
        <h1>Contactez-nous</h1>
        <p>
          Vous pouvez nous contacter via notre formulaire de contact ou
          directement par email à{" "}
          <strong style={{ color: "#085E83" }}>
            direction.isfpp@gmail.com
          </strong>
          .
        </p>
      </div>
      <div className="container my-5 d-flex justify-content-center">
        <Card style={{ width: "50rem", padding: "20px", borderRadius: "10px" }}>
          <CardBody>
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                  <Form.Label className="form-label">Nom</Form.Label>
                  <Form.Control
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Saisissez votre nom"
                    required
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label">Prénom</Form.Label>
                  <Form.Control
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Saisissez votre prénom"
                    required
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Adresse E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Saisissez votre e-mail"
                  required
                />
                <Form.Text className="text-muted">
                  Nous ne partagerons jamais votre e-mail avec quelqu'un
                  d'autre.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Addresse Locale</Form.Label>
                <Form.Control
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  placeholder="Saisissez votre adresse locale"
                  required
                />
              </Form.Group>

              <Row className="mb-3">
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                  <Form.Label className="form-label">Localisation</Form.Label>
                  <Form.Select
                    name="localisation"
                    value={formData.localisation}
                    onChange={handleChange}
                    defaultValue="Antananarivo"
                    required
                  >
                    <option>Antananarivo</option>
                    <option>Manakara</option>
                    <option>Farafangana</option>
                  </Form.Select>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label">Code Postale</Form.Label>
                  <Form.Control
                    name="code_postal"
                    value={formData.code_postal}
                    onChange={handleChange}
                    placeholder="Saisissez votre code postale"
                    required
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Petit message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: "#085E83",
                  borderColor: "#085E83",
                  color: "white",
                }}
                variant=" btn-lg"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </Button>

              {successMessage && (
                <p className="text-success mt-3">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-danger mt-3">{errorMessage}</p>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
