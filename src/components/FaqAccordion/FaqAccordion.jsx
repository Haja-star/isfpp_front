import React from 'react'
import './FaqAccordion.css';
import { Helmet } from 'react-helmet';
import { Accordion } from 'react-bootstrap';

const FaqAccordion = () => {
  return (  
    <div className='faq-section'>
      <Helmet>
        <title>Accueil | ISFPP</title>
        <meta name="description" content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts." />
      </Helmet>
      <div className='container d-flex flex-column align-items-center'>
        <h2 data-aos="fade-down" className='text-center text-capitalize mb-5'>Questions demandées plus fréquenté</h2>
        <p data-aos="fade-right" className='text-center mb-5'>
          Nous comprenons que vous puissiez avoir des interrogations sur nos formations.
          Voici quelques-unes des questions les plus courantes que nous recevons :
        </p>
        <Accordion defaultActiveKey='' flush>
          <Accordion.Item eventKey='0' className='mb-3' data-aos="fade-right">
            <Accordion.Header>Pourquoi choisir la formation en "Administration des Établissements de Santé ?</Accordion.Header>
            <Accordion.Body>
              Cette formation est conçue pour ceux qui souhaitent travailler dans le secteur de la santé,
              en apprenant à gérer des établissements médicaux, à optimiser les ressources, et à comprendre les enjeux légaux et éthiques du domaine.
              Elle est parfaite pour les professionnels qui veulent allier compétences administratives et connaissances du système de santé.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='mb-3' data-aos="fade-down">
            <Accordion.Header>Quelle différence y a-t-il entre la formation en "Comptabilité Financière" et celle en "Marketing et Commerce International" ?</Accordion.Header>
            <Accordion.Body>
              La formation en Comptabilité Financière se concentre sur la gestion des finances, l’analyse des états financiers, la comptabilité et la fiscalité. Elle est essentielle pour ceux qui souhaitent travailler dans la gestion financière d’une entreprise.
              <br />
              La formation en Marketing et Commerce International, quant à elle, se focalise sur les stratégies de marketing, la gestion des marchés internationaux, et les techniques de vente à l’étranger. Elle est adaptée pour ceux qui veulent évoluer dans un contexte mondialisé.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='mb-3' data-aos="fade-up">
            <Accordion.Header>Quelle formation est la plus adaptée pour ceux qui souhaitent gérer des équipes et optimiser les processus d’une entreprise ?</Accordion.Header>
            <Accordion.Body>
            La formation en Management et Administration d’Entreprise est idéale pour ceux qui souhaitent acquérir des compétences en gestion d’équipes, en stratégie organisationnelle et en optimisation des processus d’une entreprise. Elle prépare les apprenants à prendre des décisions éclairées et à diriger efficacement.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3' className='mb-3' data-aos="fade-left">
            <Accordion.Header>En quoi la formation en "Communication et Marketing" est-elle complémentaire à celle en "Paramédicaux" ?</Accordion.Header>
            <Accordion.Body>
              La formation en Communication et Marketing enseigne les techniques de communication, de branding et de stratégie marketing, utiles pour promouvoir des services ou des produits.
              <br />
              La formation en Paramédicaux, en revanche, se concentre sur les compétences techniques et médicales nécessaires pour exercer dans le domaine de la santé.
              Ces deux formations peuvent être complémentaires pour les professionnels de santé qui souhaitent développer des campagnes de sensibilisation ou gérer la communication d’un établissement de santé.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqAccordion
