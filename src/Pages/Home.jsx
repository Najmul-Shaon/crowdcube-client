import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <header className="container mx-auto">
      <nav>
        <NavBar></NavBar>
      </nav>
      <Header></Header>
    </header>
  );
};

export default Home;
