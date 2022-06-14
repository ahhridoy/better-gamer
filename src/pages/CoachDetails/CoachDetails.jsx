import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./_CoachDetails.scss";

const CoachDetails = () => {
  const [coach, setCoach] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/coachDetails/${id}`).then((res) => {
      setCoach(res.data);
    });
  }, [id]);

  return (
    <div id="coach-details">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <img src={coach.img} alt="" />
          </Col>
          <Col md={6} xs={12}>
            <h1 className="text-light">
              <strong>{coach.name}</strong>
            </h1>
            <h2 className="text-light">
              <strong>${coach.price}/HR</strong>
            </h2>
          </Col>
        </Row>
        <div>
          <h2 className="text-light text-center my-5">
            <strong>About</strong>
          </h2>
          <p className="text-center mb-5">{coach.about0}</p>
          <div className="w-50 mx-auto">
            <p className="text-start mb-5">{coach.about1}</p>
          </div>
          <p className="text-center text-danger">Who is {coach.name}</p>
          <p className="text-center">{coach.about2}</p>
          <p className="text-center">{coach.about3}</p>
          <p className="text-center">{coach.about4}</p>
          <p className="text-center">{coach.about5}</p>
          <p className="text-center">{coach.about6}</p>
          <p className="text-center">{coach.about7}</p>
          <p className="text-center mb-5">{coach.about8}</p>

          <div className="w-50 mx-auto">
            <p className="text-center mb-5">{coach.about9}</p>
          </div>

          <p className="text-center mb-5">
            If you are <span className="text-primary"> Top Laner</span>,{" "}
            <span className="text-primary"> Mid Laner</span> or{" "}
            <span className="text-primary"> Marksman</span> we will focus on;
          </p>

          <div className="w-50 mx-auto">
            <p className="text-start mb-5">{coach.about11}</p>
          </div>

          <p className="text-center mb-5">
            If you are <span className="text-danger">Jungler</span> we will
            focus on;
          </p>

          <div className="w-50 mx-auto">
            <p className="text-start">{coach.about13}</p>
          </div>

          <p className="text-center mb-5">
            If you are <span className="text-info">Support</span> we will focus
            on;
          </p>

          <div className="w-50 mx-auto">
            <p className="text-start mb-5">{coach.about15}</p>
          </div>

          <p className="text-center text-primary">{coach.about16}</p>

          <p className="text-start mb-5">{coach.about17}</p>
          <p className="text-center mb-5">{coach.about18}</p>

          <div className="w-50 mx-auto">
            <p className="text-center mb-5">{coach.about19}</p>
          </div>

          <p className="text-center text-warning">{coach.about20}</p>

          <p className="text-start mb-5">{coach.about21}</p>

          <div className="w-25 mx-auto">
            <p className="text-center mb-5">{coach.about22}</p>
          </div>

          <p className="text-center text-danger">{coach.about23}</p>
          <p className="text-center">{coach.about24}</p>
          <p className="text-center mb-5">{coach.about25}</p>
        </div>
      </Container>
    </div>
  );
};

export default CoachDetails;
