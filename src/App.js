import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CoachesPage from "./pages/CoachesPage/CoachesPage";
import CoachDetails from "./pages/CoachDetails/CoachDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <section id="navbar">
        <Header />
      </section>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coachDetails/:id" element={<CoachDetails />} />
      </Routes>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
