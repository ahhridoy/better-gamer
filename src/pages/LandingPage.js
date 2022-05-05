import React from "react";
import { Container, Button } from "react-bootstrap";
import Header from "../components/Header";
import "../styles/pages/_landing.scss";

const LandingPage = () => {
  return (
    <main>
      <section id="navbar">
        <Header />
      </section>

      <section id="hero">
        <Container className="container">
          <div>
            <h1 className="text-light">I want to go pro in</h1>
            <Button variant="light">League of Legends</Button> <br /> <br />
            <Button variant="primary">Find your coach</Button>
          </div>
        </Container>
      </section>

      <section id="popular-game">
        <Container className="container">
          <div className="box1">
            <img src="/assets/pick-your-title.png" alt="logo" />
            <h1 className="text-light">Pick your game</h1>
            <p className="text-light">
              We provide coaching lessons for the most popular online games by
              the best coaches available.
            </p>
            <img src="/assets/find-your-coach.png" alt="logo" />
            <h1 className="text-light">Find your coach</h1>
            <p className="text-light">
              With the help of our carefully engineered algorithm, we make it
              easy for you to find your perfect coach.
            </p>
          </div>
          <div className="box2">
            <img src="/assets/arrow.png" alt="logo" />
          </div>
          <div className="box3">
             <img src="/assets/become-a-pro.png" alt="logo" />
             <h1 className="text-light">Become a pro</h1>
             <p className="text-light">Start your lessons with our coach to begin reaching your in-game goals and become a professional player.</p>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default LandingPage;
