import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Textform from "./Components/Textform";
import About from "./Components/About";
import { useState, useSyncExternalStore } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [toggleTextColor, setToggleTextColor] = useState({
    color: "black",
  });

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      setToggleTextColor({
        color: "black",
      });
      document.body.style.backgroundColor = "white";
    }
    if (mode == "light") {
      setMode("dark");
      setModeText("Enable Light Mode");
      setToggleTextColor({
        color: "white",
      });
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
        toggleTextColor={toggleTextColor}
      />
      <Textform heading="Enter Text To Analyze" mode={mode} />
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;
