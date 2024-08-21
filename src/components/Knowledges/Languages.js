import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Modal from '../Modal';

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
    }



    render() {
        let { languages, frameworks, isLanguageModalOpen, isFrameworkModalOpen } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                {/* <button className="viewMoreButton" onClick={this.toggleLanguageModal}>
                    Voir plus pour Languages
                </button> */}

                <ProgressBar
                    languages={frameworks}
                    title="Frameworks & Bibliothèques"
                    className="frameworksDisplay"
                />
                {/* <button className="viewMoreButton" onClick={this.toggleFrameworkModal}>
                    Voir plus pour Frameworks
                </button> */}

                {/* Modal pour les langages */}
                {/* {isLanguageModalOpen && (
                    <Modal closeModal={this.toggleLanguageModal}>
                        <h2>Détails des Langages</h2>
                        <ul>
                            {languages.map((lang) => (
                                <li key={lang.id}>{lang.value} - {lang.xp} ans d'expérience</li>
                            ))}
                        </ul>
                    </Modal>
                )}

                {/* Modal pour les frameworks */}
                {isFrameworkModalOpen && (
                    <Modal closeModal={this.toggleFrameworkModal}>
                        <h2>Détails des Frameworks</h2>
                        <ul>
                            {frameworks.map((fw) => (
                                <li key={fw.id}>{fw.value} - {fw.xp} ans d'expérience</li>
                            ))}
                        </ul>
                    </Modal>
                )} 
            </div>
        );
    }
}

export default Languages;
