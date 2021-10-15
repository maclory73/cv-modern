import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "html", xp:1.6},
            {id: 2, value: "css", xp:1.6},
            {id: 3, value: "php", xp:1},
            {id: 4, value: "javascript", xp:1.3}
        ],
        frameworks: [
            {id: 1, value: "Sass", xp:0.8},
            {id: 2, value: "Bootstrap", xp:0.9},
            {id: 3, value: "Symfony", xp:0.3},
            {id: 4, value: "React", xp:0.2}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;