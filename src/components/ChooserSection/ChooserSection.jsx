
import React from 'react';
import { Card } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import Icon from './Icon'; // Importation du composant Icon

const ChooserSection = () => {
  return (
    <div>
      {/* Ajout de la balise meta description avec React Helmet */}
      <Helmet>
        <meta name="description" content="Découvrez les avantages de choisir ISFPP : orientation professionnelle, opportunités d'emploi et itinéraire stratégique à Antananarivo." />
        <title>Pourquoi Choisir ISFPP ?</title>
      </Helmet>
      <div className='container'>
        <h2 data-aos="fade-down" className='text-center mb-3'>Pourquoi choisissez ISFPP ?</h2>
        <p> L’Institut Supérieur de Formation Professionnelle et des Paramédicaux (ISFPP) se distingue par son excellence académique, 
        ses programmes adaptés au marché du travail, et un encadrement pédagogique de qualité. Rejoignez-nous pour construire un avenir prometteur.</p>
        <div className='row g-4'>
          <div data-aos="fade-right" className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <Icon iconPath="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
              </div>
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  L’Orientation Professionnelle
                </Card.Title>
                <Card.Text className='text-center'>
                  Choisissez votre avenir en toute confiance grâce à des conseils adaptés à votre parcours et à vos ambitions.🚀
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="fade-up" className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <Icon iconPath="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
              </div>
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Les opportunités d’emploi et de stage
                </Card.Title>
                <Card.Text className='text-center'>
                  Boostez votre carrière en accédant à des offres adaptées à votre profil et à vos aspirations professionnelles. 💼🚀
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="fade-left" className='col-lg-4'>
            <Card className='d-flex align-items-center border-0 h-100'>
              <div className='mt-3'>
                <Icon iconPath="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </div>
              <Card.Body>
                <Card.Title className='text-center text-capitalize mb-3' style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Manakara - Mahamasina Antananarivo vers Route IFIRP Befelatanana
                </Card.Title>
                <Card.Text className='text-center'>
                  Un itinéraire clé reliant le cœur de la ville à des points stratégiques pour un trajet fluide et accessible. 🛣️🚗
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooserSection;
