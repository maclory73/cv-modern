import React, { useState } from 'react';
import Modal from './Modal';

const Experiences = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent('');
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
                    <button className="button" onClick={() => openModal('Apprentis Data-analyste Airbus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}>
                        Voir plus
                    </button>
                </div>

                <div className="exp-2">
                    <h4>Coach/Formateur dev web et web mobile 2022 / 2022</h4>
                    <p>Formateur en développement web et mobile</p>
                    <p>Responsable du site de formation de Saint-Baldoph.</p>
                    <button className="button" onClick={() => openModal('Coach/Formateur dev web et web mobile 2022-2022', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum. Lorem ipsum dolor sit amet.')}>
                        Voir plus
                    </button>
                </div>

                <div className="exp-3">
                    <h4>Monteur - Cableur Alstom-Areva 2001 / 2009</h4>
                    <p>- Montage de sous-ensembles mécaniques en "atelier blanc".</p>
                    <p>- Montage de postes sur site sous la direction du superviseur.</p>
                    <button className="button" onClick={() => openModal('Monteur - Cableur Alstom-Areva 2001-2009', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum. Lorem ipsum dolor sit amet.')}>
                        Voir plus
                    </button>
                </div>
            </div>

            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                <p>{modalContent}</p>
            </Modal>
        </>
    );
};

export default Experiences;
