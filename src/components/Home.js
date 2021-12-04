import circles from "./circles.svg";
import "./Home.css";

const Home = () => {
  return (
    <section className="Landing">
      <img src={circles} />
      <h1>Dots</h1>
    </section>
  );
};

export default Home;
