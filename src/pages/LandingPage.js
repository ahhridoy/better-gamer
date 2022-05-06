import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Coaches from "../components/Coaches";
import Footer from "../components/Footer";
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
          <Row>
            <Col md={6} xs={12}>
              <div className="my-5">
                <img src="/assets/pick-your-title.png" alt="logo" />
                <h2 className="text-light">Pick your game</h2>
                <p className="text-light">
                  We provide coaching lessons for the most popular online games
                  by the best coaches available.
                </p>
              </div>
              <img src="/assets/find-your-coach.png" alt="logo" />
              <h2 className="text-light">Find your coach</h2>
              <p className="text-light">
                With the help of our carefully engineered algorithm, we make it
                easy for you to find your perfect coach.
              </p>
            </Col>
            <Col md={3} xs={12}>
              <div className="my-5">
                <img src="/assets/arrow.png" alt="logo" />
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className="my-5">
              <img src="/assets/become-a-pro.png" alt="logo" />
              <h2 className="text-light">Become a pro</h2>
              <p className="text-light">
                Start your lessons with our coach to begin reaching your in-game
                goals and become a professional player.
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="coaches">
        <Coaches />
      </section>

      <section id="how-it-works">
        <Container>
          <h1 className="text-light text-center mb-5">How it works</h1>
          <Row>
            <Col md={6} xs={12} className="gx-5">
              <img
                className="w-100 border border-white"
                src="/assets/login.png"
                alt=""
              />
            </Col>
            <Col md={6} xs={12} className="steps">
              <div className="text-light d-flex">
                <div>
                  <span className="number me-4">1</span>
                </div>
                <div>
                  <h4>Create your Bettergamer account.</h4>
                  <p>
                    Create your unique Bettergmer account to access all of our
                    features. The process is lightning quick, and it is the
                    first step of becoming the Bettergamer!
                  </p>
                </div>
              </div>

              <div className="text-light d-flex">
                <div>
                  <span className="number me-4">2</span>
                </div>
                <div>
                  <h4>
                    Select your game and use the algorithm to find your perfect
                    coach.
                  </h4>
                  <p>
                    Choose your game, and you can start browsing its coaches.
                    Our easily accessible platform and the thoroughly-crafted
                    algorithm make it easy picking your perfect coach!
                  </p>
                </div>
              </div>

              <div className="text-light d-flex">
                <div>
                  <span className="number me-4">3</span>
                </div>
                <div>
                  <h4>
                    Book your coach and start your journey as a professional
                    player.
                  </h4>
                  <p>
                    After finishing the booking and the checkout process, you
                    will access the coach in our member's area. In your unique
                    order, you can start chatting with the coach and plan your
                    first session!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="bettergamer">
        <Container>
          <Row>
            <Col md={6} xs={12} className="gy-5">
              <div>
                <img className="w-100" src="/assets/content1.png" alt="logo" />
              </div>
            </Col>
            <Col md={6} xs={12} className="gy-5">
              <div className="text-light">
                <h3>Become the Better Gamer!</h3>
                <p>
                  Are you an online-gaming and esport enthusiast and looking to
                  dominate any game that comes in your way? Do not hesitate any
                  longer. If you are seriously considering becoming a
                  professional player, coaching by Bettergamer holds the
                  solution for you. Our highly talented Esport coaches are ready
                  to bring your game to the next level. No matter if you are a
                  beginner or have been pursuing a career in esport.
                  Bettergamer's coaches can provide you with outstanding results
                  of improvements to reach your goals. You are just a few clicks
                  away to become the better gamer and start your journey of
                  becoming a professional player.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12} className="gy-5">
              <div className="text-light">
                <h3>Our Professional Esport Players are ready to help you.</h3>
                <p>
                  At Bettergamer you learn the game from the best of the best.
                  We believe that the fastest way to reach the top is by
                  learning the game by the unquestionably best players in each
                  title. Bettergamer thoroughly gathers and filters the ultimate
                  best players of each game. Because of these measures,
                  Bettergamer provides you with not only talent but teachers
                  that can quickly and effectively help you reach your in-game
                  goals. Bettergamer's selected coaches are ready for booking,
                  and their availability is indicated at each coach live
                  calendar. To book the coach, choose your title, then filter
                  through our coaches to find your perfect one.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12} className="gy-5">
              <div>
                <img className="w-100" src="/assets/content2.png" alt="logo" />
              </div>
            </Col>
            <Col md={6} xs={12} className="gy-5">
              <div>
                <img className="w-100" src="/assets/content3.png" alt="logo" />
              </div>
            </Col>
            <Col md={6} xs={12} className="gy-5">
              <div className="text-light">
                <h3>Become the Better Gamer!</h3>
                <p>
                  Are you an online-gaming and esport enthusiast and looking to
                  dominate any game that comes in your way? Do not hesitate any
                  longer. If you are seriously considering becoming a
                  professional player, coaching by Bettergamer holds the
                  solution for you. Our highly talented Esport coaches are ready
                  to bring your game to the next level. No matter if you are a
                  beginner or have been pursuing a career in esport.
                  Bettergamer's coaches can provide you with outstanding results
                  of improvements to reach your goals. You are just a few clicks
                  away to become the better gamer and start your journey of
                  becoming a professional player.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
