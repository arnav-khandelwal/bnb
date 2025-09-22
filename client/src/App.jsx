import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Amenities from './components/Amenities/Amenities';
import Contact from './components/Contact/Contact';
import './App.scss';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about"><About /></section>
      <section><Rooms /></section>
      <section id="amenities"><Amenities /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
