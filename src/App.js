import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Coaches from "./components/Coaches";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <section id="navbar">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
