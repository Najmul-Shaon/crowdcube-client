import { Toaster } from "react-hot-toast";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Toaster></Toaster>
      <header className="container mx-auto font-poppins">
        <nav className="">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="min-h-screen font-poppins">
        <Outlet></Outlet>
      </main>
      <footer className="font-poppins">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default RootLayout;
