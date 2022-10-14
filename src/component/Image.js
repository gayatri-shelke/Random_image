import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const apiRoot =await axios ("https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9");
      console.log(apiRoot);
      const randomIndex = Math.floor(Math.random()*50);
      console.log(randomIndex);
      setImage(`${apiRoot.data.data[randomIndex].images.fixed_height.url}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <div>
      <Container style={{ marginTop: "10px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card style={{ backgroundColor: "powderBlue" }}>
              <Card.Img
                variant="top"
                src={image}
                style={{ height: "450px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>Image</Card.Title>
                <Card.Text>Fetches random giphy images on click</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setFetching(!fetching)}
                >
                  next
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;