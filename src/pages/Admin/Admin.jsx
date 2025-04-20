import React, { useState } from "react";
import "./Admin.css";
import { Helmet } from "react-helmet-async";
import Activite from "../Activite/Activite";
import Directeur from "../Directeur/Directeur";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  // State pour gérer le composant à afficher
  const [selectedComponent, setSelectedComponent] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Supprime le token
    navigate("/login"); // Redirige vers la page de connexion
  };

  return (
    <div className="admin-container">
      {/* Helmet pour définir le titre et les métadonnées */}
      <Helmet>
        <title>Tableau de Bord | ISFPP</title>
        <meta name="description" content="Interface d'administration pour gérer les activités et les utilisateurs." />
        <meta name="keywords" content="admin, tableau de bord, gestion, ISFPP" />
      </Helmet>
      {/* Navbar */}
      <nav className="tabbar">
        <h2>ISFPP Dashboard</h2>
      </nav>

      <div className="admin-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>
              <button className="sidebar-btn" onClick={() => setSelectedComponent(<Directeur />)}>
                Directeur
              </button>
            </li>
            <li>
              <button className="sidebar-btn" onClick={() => setSelectedComponent(<Activite />)}>
                Blog
              </button>
            </li>
          </ul>
          {/* Bouton de déconnexion placé en bas */}
          <button className="logout-btn" onClick={handleLogout}>Déconnexion</button>

        </aside>

        {/* Main Content */}
        <main className="main-content">
          {selectedComponent ? (
            selectedComponent
          ) : (
            <>
              <h3>Bienvenue sur l'interface administrateur</h3>
              <p>Veuillez sélectionner une option dans la barre latérale.</p>
              
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
