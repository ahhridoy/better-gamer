import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoachesPage from "./pages/CoachesPage/CoachesPage";
import CoachDetails from "./pages/CoachDetails/CoachDetails";

function App() {
  return (
    <div>
      <section id="navbar">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/coachDetails/:id" element={<CoachDetails />} />
      </Routes>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
