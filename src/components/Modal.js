// src/components/Modal.js
import React from 'react';


const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{title}</h2>
                <div className="modal-body">{children}</div>
                <button className="close-button" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
};

export default Modal;
