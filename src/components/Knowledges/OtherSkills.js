import React, { useState } from 'react';
import Modal from '../Modal'; // Assurez-vous d'avoir un composant Modal fonctionnel

const OtherSkills = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="otherSkills">
                <h3>Autres compétences</h3>
                <div className="list">
                    <ul>
                        <li><i className="fas fa-check-square"></i>Programmation en Python</li>
                        <li><i className="fas fa-check-square"></i>Développement Front-end (HTML, CSS, JavaScript)</li>
                        <li><i className="fas fa-check-square"></i>Gestion de bases de données (SQL, NoSQL)</li>
                        <li><i className="fas fa-check-square"></i>Développement d'API RESTful</li>
                    </ul>
                    <ul>
                        <li><i className="fas fa-check-square"></i>Analyse des données (Pandas, NumPy)</li>
                        <li><i className="fas fa-check-square"></i>Outils de versionnement (Git, GitHub/GitLab)</li>
                        <li><i className="fas fa-check-square"></i>Déploiement avec Docker</li>
                        <li><i className="fas fa-check-square"></i>Maîtrise de frameworks (React, Django)</li>
                    </ul>
                </div>
                <button className="see-more-button" onClick={openModal}>
                    Voir plus
                </button>
            </div>

            {showModal && (
                <Modal show={showModal} onClose={closeModal} title="Compétences supplémentaires">
                    <div className="modal-content">
                        <h3>Compétences supplémentaires</h3>
                        <ul>
                            <li><i className="fas fa-check-square"></i>Anglais courant</li>
                            <li><i className="fas fa-check-square"></i>Espagnol scolaire</li>
                            <li><i className="fas fa-check-square"></i>Russe débutant</li>
                            <li><i className="fas fa-check-square"></i>Bahasa indonesia basique</li>
                            <li><i className="fas fa-check-square"></i>Esprit d'équipe et autonomie</li>
                            <li><i className="fas fa-check-square"></i>Gestion de projet Agile</li>
                            <li><i className="fas fa-check-square"></i>Capacité à résoudre des problèmes complexes</li>
                            <li><i className="fas fa-check-square"></i>Communication efficace</li>
                        </ul>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default OtherSkills;
