import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Creations from "./Components/Creations";
import img1 from "./Creations_imgs/1.jpg";
import img2 from "./Creations_imgs/2.jpg";
import img3 from "./Creations_imgs/3.jpg";
import img4 from "./Creations_imgs/4.jpg";
import img5 from "./Creations_imgs/5.jpg";
import img6 from "./Creations_imgs/6.jpg";
import img7 from "./Creations_imgs/7.jpg";
import img8 from "./Creations_imgs/8.jpg";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  // STATE FOR DARK MODE
  const [theme, settheme] = useState<string>("light");

  // FUNCTION CLICK TOGGLE
  const modeHandler = () => {
    settheme(theme === "light" ? "dark" : "light");
  };

  const imagesList = [
    { image: img1, text: "DEEP EARTH" },
    { image: img2, text: "NIGHT ARCADE" },
    { image: img3, text: "SOCCER TEAM VR" },
    { image: img4, text: "THE GRID" },
    { image: img5, text: "FROM UP ABOVE VR" },
    { image: img6, text: "POCKET BOREALIS" },
    { image: img7, text: "THE CURIOSITY" },
    { image: img8, text: "MAKE IT FISHEYE" },
  ];

  return (
    <>
      <Navbar theme={theme} modeHandler={modeHandler} />
      <Intro theme={theme} />
      <Creations imagesList={imagesList} theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;
