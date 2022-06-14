import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CoachPage from "../CoachPage/CoachPage";

const CoachesPage = () => {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/coaches").then((res) => {
      setCoaches(res.data);
    });
  }, []);
  
  return (
    <div style={{ overflow: "hidden" }}>
      <Container>
        <h1 className="text-light text-center my-5">Featured coaches</h1>
        <Row>
          {coaches.map((coach) => (
            <CoachPage key={coach.name} coach={coach} />
          ))}
        </Row>
        <div className="text-center my-5">
          <Button variant="outline-primary">Show More</Button>
        </div>
      </Container>
    </div>
  );
};

export default CoachesPage;
