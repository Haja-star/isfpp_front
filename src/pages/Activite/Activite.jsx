import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Activite.css';

const API_URL = 'https://backend.isfpp.com/blog';
const API_URL_BASE = 'https://backend.isfpp.com';

const Activite = () => {
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'Ajouter un Blog | I.S.F.P.P';
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Ajoutez un blog avec une image, une description et un titre.';
        document.head.appendChild(metaDescription);

        fetchBlogs();

        return () => {
            document.head.removeChild(metaDescription);
        };
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setEntries(data);
        } catch (error) {
            toast.error('Erreur lors de la récupération des blogs', { theme: 'colored' });
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        } else {
            toast.error('Veuillez sélectionner une image valide.', { theme: 'colored' });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image || !description.trim() || !title.trim()) {
            toast.error('Veuillez remplir tous les champs.', { theme: 'colored' });
            return;
        }

        const formData = new FormData();
        if (imageFile) formData.append('image', imageFile);
        formData.append('title', title);
        formData.append('description', description);

        try {
            const method = editingId ? 'PUT' : 'POST';
            const url = editingId ? `${API_URL}/update/${editingId}` : API_URL;
            const response = await fetch(url, {
                method,
                body: formData,
            });

            if (!response.ok) throw new Error("Échec de l'envoi des données");

            toast.success(editingId ? 'Blog mis à jour avec succès !' : 'Blog ajouté avec succès !', { theme: 'colored' });
            fetchBlogs();
            closeModal();
        } catch (error) {
            toast.error('Erreur lors de l\'ajout/maj du blog.', { theme: 'colored' });
        }

        resetForm();
    };

    const handleEdit = (row) => {
        setEditingId(row.id);
        setTitle(row.title);
        setDescription(row.description);
        setImage(`${API_URL_BASE}${row.imageUrl}`);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce blog ?')) {
            try {
                const response = await fetch(`${API_URL}/delete/${id}`, { method: 'DELETE' });
                if (!response.ok) throw new Error("Échec de la suppression du blog");
                toast.success('Blog supprimé avec succès !', { theme: 'colored' });
                fetchBlogs();
            } catch (error) {
                toast.error('Erreur lors de la suppression du blog.', { theme: 'colored' });
            }
        }
    };

    const resetForm = () => {
        setImage(null);
        setImageFile(null);
        setDescription('');
        setTitle('');
        setEditingId(null);
    };

    const closeModal = () => {
        setShowModal(false);
        resetForm();
    };

    const columns = [
        {
            name: 'Image',
            selector: row => <img src={`${API_URL_BASE}${row.imageUrl}`} alt="Aperçu" className="image-thumbnail" />,
            sortable: false
        },
        { name: 'Titre', selector: row => row.title, sortable: true },
        {
            name: 'Description',
            selector: row => row.description.length > 20
                ? row.description.substring(0, 45) + "..."
                : row.description,
            sortable: true
        },
        {
            name: 'Actions',
            selector: row => (
                <div className="actions">
                    <button className="edit-btn" onClick={() => handleEdit(row)}>Modifier</button>
                    <button className="delete-btn" onClick={() => handleDelete(row.id)}>Supprimer</button>
                </div>
            ),
            sortable: false
        },
    ];

    return (
        <main>
            <section className="blog-list">
                <div className="header-section">
                    <h3 className="blog-title">Liste des activités</h3>
                    <button className="new-blog-btn" onClick={() => setShowModal(true)}>+ Nouveau Blog</button>
                </div>
                <DataTable columns={columns} data={entries} pagination highlightOnHover striped />
            </section>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{editingId ? 'Modifier Blogs' : 'Nouveaux Blogs'}</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Image :
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                            </label>
                            {image && <img src={image} alt="Aperçu" className="image-preview" />}
                            <label>
                                Titre :
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ajoutez un titre..." />
                            </label>
                            <label>
                                Description :
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Entrez une description..." />
                            </label>
                            <div className="modal-actions">
                                <button type="submit" className="submit-button">{editingId ? 'Mettre à jour' : 'Soumettre'}</button>
                                <button type="button" className="cancel-button" onClick={closeModal}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </main>
    );
};

export default Activite;
