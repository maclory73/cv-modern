import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
       <div className="contact">
           <Navigation />
           <div className="contactContent">
               <div className="header">

               </div>
               <div className="contactBox">
                   <h1>Contactez-moi</h1>
                   <ul>
                       <li className="fas fa-map-marker-alt"></li>
                       <span>
                           Aix-les-Bains
                       </span>
                       <li>
                           <i class="fas fa-mobile-alt"> </i>
                           <CopyToClipboard text="0677165526">
                               <span className="clickInput" 
                               onClick={() => { alert('Téléphone copié !');
                               }}>06-77-16-55-26</span>
                           </CopyToClipboard>
                       </li>
                       <li>
                           <i class="far fa-envelope"> </i>
                           <CopyToClipboard text="lorycarvajolwebdev@gmail.com">
                               <span className="clickInput" 
                               onClick={() => { alert('E-mail copié !');
                               }}>lorycarvajolwebdev@gmail.com</span>
                           </CopyToClipboard>
                       </li>
                   </ul>
               </div>
               <div className="socialNetwork">
                   <ul>
                        <a href="https://www.linkedin.com/in/lory-carvajol-71367513b/" target="_blank" 
                        rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/maclory73" target="_blank" 
                        rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                   </ul>
               </div>
           </div>
       </div>
    );
};

export default Contact;
