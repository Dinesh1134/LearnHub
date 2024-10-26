import React from 'react';
import Header from '../components/Header';
import Upgrade from '../components/HomeComponents/Upgrade';
import Partners from '../components/HomeComponents/Partners';
import Features from '../components/HomeComponents/Features';
import Success from '../components/HomeComponents/Success';
import Footer from '../components/Footer';

const Home = ({ students }) => {
  return (
    <div>
      <Header />
      <main>
        <Upgrade />
        <Partners />
        <Features />
        <Success students={students} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;