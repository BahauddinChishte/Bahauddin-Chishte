import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationJourney from './components/EducationJourney';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Impact from './components/Impact';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />
      <main className="flex-1 lg:pl-[240px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <Hero />
            <EducationJourney />
            <Experience />
            <Projects />
            <Blog />
            <Impact />
            <Achievements />
            <Interests />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}