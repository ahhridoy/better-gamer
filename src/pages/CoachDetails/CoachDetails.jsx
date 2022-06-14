import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CoachDetails = () => {
  const [coach, setCoach] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/coachDetails/${id}`).then((res) => {
      setCoach(res.data);
    });
  }, [id]);
  
  return (
    <div style={{ overflow: "hidden" }}>
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
      </Container>
    </div>
  );
};

export default CoachDetails;
