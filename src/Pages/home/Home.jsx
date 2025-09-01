import React from 'react';
import Hero from '../../component/Section/Hero';
import ContactSections from '../../component/Section/ContactSections';
import Skills from '../../component/Section/Skills';
import AboutMe from '../../component/Section/AboutMe';

const Home = () => {
    return (
        <div className="">
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <ContactSections></ContactSections>
        </div>
    );
};

export default Home;