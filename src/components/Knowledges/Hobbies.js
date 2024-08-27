import React, { useState } from 'react';
import Modal from './Modal';

const Hobbies = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                        <i className="fas fa-drumstick-bite"></i>
                        <span>Cuisine</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-fish"></i>
                        <span>Aquaplaning</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-book"></i>
                        <span>Lecture</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-water"></i>
                        <span>Natation</span>
                    </li>
                </ul>
                <button className="button" onClick={toggleModal}>
                    Voir plus
                </button>
            </div>

            <Modal show={showModal} onClose={toggleModal} title="Détails des Intérêts">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum.</p>
            </Modal>
        </>
    );
};

export default Hobbies;
