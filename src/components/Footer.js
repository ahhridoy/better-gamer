import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <h3 className="text-light">Games</h3>
        <div className="footer-content">
          <div>
            <p>
              <a href="#">League of Legends</a>
            </p>
            <p>
              <a href="#">Valorant</a>
            </p>
            <p>
              <a href="#">Overwatch</a>
            </p>
            <p>
              <a href="#">Wild Rift</a>
            </p>
            <p>
              <a href="#">Teamfight Tactics</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Rocket League</a>
            </p>
            <p>
              <a href="#">Apex Legends</a>
            </p>
            <p>
              <a href="#">Hearthstone</a>
            </p>
            <p>
              <a href="#">Counter-Strike: GO</a>
            </p>
            <p>
              <a href="#">Dota 2</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Rainbow Six Siege</a>
            </p>
            <p>
              <a href="#">Fortnite</a>
            </p>
            <p>
              <a href="#">Destiny 2</a>
            </p>
          </div>
        </div>
        <h3 className="text-light">Contact</h3>
        <div className="footer-link">
          <div>
            <p>
              <a href="#">bettergamerofficial</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">bettergamer_official</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">bettergamercom</a>
            </p>
          </div>
        </div>
        <div className="footer-description">
          <div>
            <img src="/assets/logo.png" alt="logo" />
            <p className="text-light">
              © 2022 BetterGamer.com - All Rights Reserved <br /> 
              Overwatch, Hearthstone, Heroes of the Storm, Starcraft 2, are trademarks
              and/or registered trademarks of Blizzard Entertainment Inc.
              Counter-Strike and Dota are trademarks and/or registered
              trademarks of the Valve Corporation. World of Tanks is a trademark
              and/or registered trademark of Wargaming.net. PLAYERUNKNOWN'S
              BATTLEGROUNDS is a registered trademark, trademark or service mark
              of Bluehole, Inc. and its affiliates. Bettergamer.com isn't
              endorsed by Riot Games and doesn't reflect the views or opinions
              of Riot Games or anyone officially involved in producing or
              managing League of Legends. League of Legends and Riot Games are
              trademarks or registered trademarks of Riot Games, Inc. League of
              Legends© Riot Games, Inc. Any other marks are trademarks and/or
              registered trademarks of their respective owners. No endorsement
              is express or implied.
            </p>
            <h4> <a href="#" className="me-4">Terms of use</a> <a href="#">Privacy Policy</a> </h4>
          </div>
          <div>
             <img src="/assets/payment.png" alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
