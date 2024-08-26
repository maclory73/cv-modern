import React, { useState } from 'react';
import Modal from '../Modal';


const Experiences = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
        setModalTitle('');
    };

    return (
        <>
            <div className="experience">
                <h3>Expérience</h3>

                <div className="exp-1">
                    <h4>Apprentis Data-analyste Airbus 2022 / 2024</h4>
                    <p>- Mise en place du projet PiltoME.</p>
                            <p>- Suivi et support des activités du service Manufacturing Engineering.</p>
                    <button className="experience-button" onClick={() => openModal('Apprentis Data-analyste Airbus', (
                        <>
                            <p>- Mise en place du projet PiltoME.</p>
                            <p>- Suivi et support des activités du service Manufacturing Engineering.</p>
                            <p>- Définir le besoin avec le service demandeur, établir le contrat d'accord.</p>
                            <p>- Développer la partie transformation des données direct et calculé.</p>
                            <p>- Générations des dashboards ainsi que la documentation associée.</p>
                        </>
                    ))}>
                        Voir plus
                    </button>
                </div>

                <div className="exp-2">
                    <h4>Coach/Formateur dev web et web mobile 2022 / 2022</h4>
                    <p>Formateur en développement web et mobile</p>
                    <p>Responsable du site de formation de Saint-Baldoph.</p>
                    <button className="experience-button" onClick={() => openModal('Coach/Formateur dev web et web mobile 2022-2022', (
                        <>
                            <p>- Formateur en développement web et applications mobiles.
                                Responsable du site de formation de Saint-Baldoph.
                                Activités de freelance à distance pour des organismes de formation à travers toute la France, proposant des modules sur React, PostgreSQL, PHP, programmation orientée objet, et une initiation aux métiers du web, en partenariat avec l'association SR3.
                            </p>
                        </>
                    ))}>
                        Voir plus
                    </button>
                </div>

                <div className="exp-3">
                    <h4>Monteur - Cableur Alstom-Areva 2001 / 2009</h4>
                    <p>- Montage de sous-ensembles mécaniques en "atelier blanc".</p>
                            <p>- Montage de postes sur site sous la direction du superviseur.</p>
                    <button className="experience-button" onClick={() => openModal('Technicien spécialisé pour Alstom-Areva 2001-2009', (
                        <>
                            <p>- Montage de sous-ensembles mécaniques en "atelier blanc".</p>
                            <p>- Montage de postes sur site sous la direction du superviseur.</p>
                            <p>- Capacité à travailler proprement en sécurité en atelier comme en hauteur.</p>
                        </>
                    ))}>
                        Voir plus
                    </button>
                </div>
            </div>

            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
        </>
    );
};

export default Experiences;
