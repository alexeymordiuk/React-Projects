import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Programm from "../components/Programm";
import Dishes from "../components/Dishes";
import Cheked from "../components/Cheked";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Programm />
        <Dishes />
        <Cheked />
      </main>
      <Footer />
    </>
  );
};

export default Home;
