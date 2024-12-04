import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Team from "../Components/Team";

const Home = () => {
  return (
    <>
      <header className="container mx-auto font-poppins">
        <nav>
          <NavBar></NavBar>
        </nav>
        <Banner></Banner>
      </header>
      <main className="min-h-screen font-poppins">
        <Outlet></Outlet>
        <About></About>
        <Team></Team>
      </main>
      <footer className="mt-24 font-poppins">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
