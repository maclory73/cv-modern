import React from 'react';
import Experiences from '../components/Knowledges/Experiences';
import Hobbies from '../components/Knowledges/Hobbies';
import Languages from '../components/Knowledges/Languages';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">            
           <Navigation />
           <div className="knowledgesContent">
              <Languages />
              <Experiences />
              <OtherSkills />
              <Hobbies />
              
           </div>
        </div>
    );
};

export default Knowledges;