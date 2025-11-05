import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Products';
import Commitment from './components/Commitment';
import Industries from './components/Industries';
import About from './components/About';
import GlobalReach from './components/GlobalReach';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { GetInTouch } from './components/GetInTouch';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Commitment />
      <Industries />
      <About />
      <GlobalReach />
      <Stats />
      <Testimonials />
      <GetInTouch />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="font-sans">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
