import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Coach from "./Coach";

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    axios.get("./fakeData.json").then((res) => {
      setCoaches(res.data);
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-light text-center my-5">Featured coaches</h1>
        <Row>
          {coaches.map((coach) => (
            <Coach key={coach.name} coach={coach} />
          ))}
        </Row>
        <div className="text-center my-5">
          <Button variant="outline-primary">Show More</Button>
        </div>
      </Container>
    </div>
  );
};

export default Coaches;
