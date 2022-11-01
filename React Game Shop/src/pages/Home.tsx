import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Header from "../Components/Header";
import Info from "../Components/Info";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Info />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
