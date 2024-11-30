import React from 'react';


const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); // Ferme le modal si l'utilisateur clique sur l'overlay
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-button">&times;</button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
