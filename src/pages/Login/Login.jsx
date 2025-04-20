import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from "../../utils/images/logo-isfpp_1.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://backend.isfpp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        console.log("✅ Connexion réussie !"); 
        sessionStorage.setItem("token", data.token);
        navigate("/admin");
        // Rediriger ou stocker le token ici si nécessaire
      } else {
        // Réinitialiser le mot de passe si la connexion échoue
        setPassword("");
        /*alert("Mot de passe incorrect !");*/
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion");
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Authentification I.S.F.P.P</title>
        <meta name="description" content="Découvrez notre engagement à fournir des formations adaptées aux réalités du marché et dispensées par des experts." />
      </Helmet>
      <div className="login-box">
        <div className="login-header">
          <img src={image} alt="Logo" className="logo" />
          <h2>Administrateur I.S.F.P.P</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              placeholder="Tapez votre adresse nom d'utilisateur..."
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group" style={{ position: "relative" }}>
            <label>Mot de passe</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Tapez votre mot de passe...."
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "40px" }}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "70%",
                color: "#555",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          <button type="submit" className="login-button">Connexion</button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>
      {/* Promo Box */}
      <div className="promo-box">
        <h1>Accréditation</h1>
      </div>
    </div>
  );
};

export default Login;
