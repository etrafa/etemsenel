import "./HomePage.css";
import HomePageProps from "./HomePageProps";

const HomePage = ({ page }) => {
  return (
    <main>
      {page === 1 && <HomePageProps animationName="fadeIn" />}
      {page === 2 && <HomePageProps animationName="fadeOut" />}
    </main>
  );
};

export default HomePage;

// page === 1 &&   <Animated  animationIn="fadeIn"
// page === 2 &&   <Animated  animationIn="fadeOut"
