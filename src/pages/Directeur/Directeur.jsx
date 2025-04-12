import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Directeur.css';

const API_BASE_URL = 'https://backend.isfpp.com/director';

const Directeur = () => {
    const [message, setMessage] = useState('');

    // Charger le mot du directeur existant
    useEffect(() => {
        const fetchDirectorWord = async () => {
            try {
                const response = await fetch(API_BASE_URL, { method: 'GET' });
                if (!response.ok) throw new Error('Erreur lors de la récupération des données');
                
                const data = await response.json();
                if (data.director_word) {
                    setMessage(data.director_word);
                }
            } catch (error) {
                toast.error(`Erreur: ${error.message}`);
            }
        };

        fetchDirectorWord();
    }, []);

    // Fonction pour soumettre les modifications
    const handleSubmit = async () => {
        if (!message.trim()) {
            toast.error('Veuillez entrer un message avant de soumettre.');
            return;
        }

        try {
            const response = await fetch(API_BASE_URL, { 
                method: 'POST',  // Changer PUT en POST pour correspondre au backend
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ director_word: message }),
            });

            if (!response.ok) throw new Error('Erreur lors de la mise à jour');

            toast.success('Message mis à jour avec succès !');
        } catch (error) {
            toast.error(`Erreur: ${error.message}`);
        }
    };

    return (
        <main>
            <section>
                <span>Mot du directeur</span>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    className="directeur-textarea"
                />
                <button className='btn-soumettre' type="button" onClick={handleSubmit}>Soumettre</button>
            </section>
            <ToastContainer />
        </main>
    );
};

export default Directeur;
