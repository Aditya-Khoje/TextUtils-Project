import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Textform from "./Components/Textform";
import About from "./Components/About";
import { useState, useSyncExternalStore } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Alerts from "./Components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [toggleTextColor, setToggleTextColor] = useState({
    color: "black",
  });
  const [alert, setAlert] = useState(null);

  const setAlerti = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      setToggleTextColor({
        color: "black",
      });
      document.body.style.backgroundColor = "white";
      setAlerti("Light Mode has been enabled", "success");
    }
    if (mode == "light") {
      setMode("dark");
      setModeText("Enable Light Mode");
      setToggleTextColor({
        color: "white",
      });
      document.body.style.backgroundColor = "#042743";
      setAlerti("Dark Mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
        toggleTextColor={toggleTextColor}
      />
      <Alerts alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Textform
              heading="Enter Text To Analyze"
              mode={mode}
              setAlerti={setAlerti}
            />
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
