import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Modal from './components/common/Modal';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalTitle('');
    setModalContent(null);
  };

  return (
    <div className="App"> {/* This div now covers the entire viewport */}
      <Router>
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Modal show={showModal} onClose={closeModal} title={modalTitle}>
          {modalContent}
        </Modal>
      </Router>
    </div>
  );
};

export default App;
