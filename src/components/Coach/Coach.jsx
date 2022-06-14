import React from "react";
import { Col } from "react-bootstrap";

const Coach = ({ coach }) => {
  const { img, logo, company, name, price, des1, des2, des3 } = coach;
  return (
    <div style={{ overflow: "hidden" }}>
      <Col md={4} xs={12}>
        <div className="text-light">
          <img src={img} alt="" />
          <div className="d-flex justify-content-between">
            <div>
              <h5>{company}</h5>
              <h3>{name}</h3>
              {/* <img src={flag} alt="" /> */}
            </div>
            <div>
              <img className="w-25" src={logo} alt="" />
            </div>
          </div>
          <hr />
          <p>{des1}</p>
          <p>{des2}</p>
          <p>{des3}</p>
          <h2>${price}/hr</h2>
        </div>
      </Col>
    </div>
  );
};

export default Coach;
