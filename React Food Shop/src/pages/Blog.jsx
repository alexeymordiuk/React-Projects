import React from 'react'
import Chef from '../components/Chef'
import Header from '../components/Header'
import History from '../components/History';
import Dishes from '../components/Dishes';
import Cheked from '../components/Cheked';
import Footer from '../components/Footer';

const Blog = () => {
  window.scrollTo(0,0);
  
  return (
    <>
    <Header/>
    <main>
      <Chef/>
      <History/>
      <Dishes/>
      <Cheked/>
    </main>
    <Footer/>
    </>
  )
}

export default Blog