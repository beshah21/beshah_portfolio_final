import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './pages/Footer.jsx';
import Header from './pages/Header.jsx';
import Hero from './pages/Hero.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';

function App() {
  return (
    <HashRouter>
      <Header style={{ paddingTop: '80px', paddingBottom: '80px' }}/>
      <Routes>
        <Route path='/' element={<Hero />} /> {/* Default route */}
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;