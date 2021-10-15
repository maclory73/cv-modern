import React from 'react';

const Hobbies = () => {
    return (
        
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
                            <span>natation</span>
                        </li>
                    </ul>
            </div>
        
    );
};

export default Hobbies;