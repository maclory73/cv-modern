import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Modal from '../common/Modal';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Python", xp: 1.5 },
            { id: 2, value: "SQL", xp: 1.5 },
            { id: 3, value: "php", xp: 1.2 },
            { id: 4, value: "javascript", xp: 1 }
        ],
        frameworks: [
            { id: 1, value: "Django", xp: 1.1 },
            { id: 2, value: "Bootstrap", xp: 1.1 },
            { id: 3, value: "Symfony", xp: 0.9 },
            { id: 4, value: "React", xp: 0.6 }
        ],
        isLanguageModalOpen: false,
        isFrameworkModalOpen: false,
    };

    toggleLanguageModal = () => {
        this.setState(prevState => ({
            isLanguageModalOpen: !prevState.isLanguageModalOpen,
        }));
    };

    toggleFrameworkModal = () => {
        this.setState(prevState => ({
            isFrameworkModalOpen: !prevState.isFrameworkModalOpen,
        }));
    };

    render() {
        const { languages, frameworks, isLanguageModalOpen, isFrameworkModalOpen } = this.state;

        return (
            <div className="languagesFrameworks">
                <div className="languagesDisplay">

                    <ProgressBar
                        languages={languages}
                        title="Languages"
                    />
                    <button className="button" onClick={this.toggleLanguageModal}>
                        Voir plus
                    </button>
                </div>

                <div className="frameworksDisplay">

                    <ProgressBar
                        languages={frameworks}
                        title="Frameworks & Bibliothèques"
                    />
                    <button className="button" onClick={this.toggleFrameworkModal}>
                        Voir plus
                    </button>
                </div>

                {isLanguageModalOpen && (
                    <Modal show={isLanguageModalOpen} onClose={this.toggleLanguageModal} title="Détails des Langages">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum.</p>
                    </Modal>
                )}

                {isFrameworkModalOpen && (
                    <Modal show={isFrameworkModalOpen} onClose={this.toggleFrameworkModal} title="Détails des Frameworks">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum.</p>
                    </Modal>
                )}
            </div>
        );
    }
}

export default Languages;
