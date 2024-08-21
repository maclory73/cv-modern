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
        <div className="experience">
            <h3>Expérience</h3>

            <div className="exp-1">
                <h4>Apprentis Data-analyste Airbus</h4>
                <button onClick={() => openModal('Apprentis Data-analyste Airbus', (
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
                <h4>Coach/Formateur dev web et web mobile 2022-2022</h4>
                <button onClick={() => openModal('Coach/Formateur dev web et web mobile 2022-2022', (
                    <>
                        <p>- CDD pour Online FormaPro afin de faire la transition entre.</p>
                        <p>- Accompagner des apprenants sur les principes de base de la programmation en PHP procédurale et POO.</p>
                        <p>- Accompagner des apprenants afin de maquetter et intégrer un site vitrine classique.</p>
                        <p>- Initiation aux bases de REACT.</p>
                        <p>- Rendre compte de l'évolution de la promo auprès de ma hiérarchie et pôle emploi.</p>
                    </>
                ))}>
                    Voir plus
                </button>
            </div>

            <div className="exp-3">
                <h4>Technicien spécialisé pour Alstom-Areva 2001-2009</h4>
                <button onClick={() => openModal('Technicien spécialisé pour Alstom-Areva 2001-2009', (
                    <>
                        <p>- Montage de sous-ensembles mécaniques en "atelier blanc".</p>
                        <p>- Montage des sous-ensembles sur site en France sous la direction du superviseur.</p>
                        <p>- Capacité à travailler proprement en sécurité en atelier comme en hauteur.</p>
                    </>
                ))}>
                    Voir plus
                </button>
            </div>

            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default Experiences;
