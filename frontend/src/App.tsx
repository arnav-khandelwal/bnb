import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Rooms } from './components/Rooms/Rooms';
import { Amenities } from './components/Amenities/Ameneties';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <Rooms />
      <div id="amenities"><Amenities /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;