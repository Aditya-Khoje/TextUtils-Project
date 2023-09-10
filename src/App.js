import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <Textform heading="Enter Text To Analyze" />
      <Footer />
    </>
  );
}

export default App;
