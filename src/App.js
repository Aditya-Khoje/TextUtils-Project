import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Textform from "./Components/Textform";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <Textform heading="Enter Text To Analyze" />
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;
