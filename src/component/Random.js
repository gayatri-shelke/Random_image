

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap';
import axios from 'axios';
function Random() {
    const [image, setImage] = useState([]);
    const fetchPost = (() => {
        axios.get("https://picsum.photos/200/300")
            .then((result) => {
                console.log(result)
                setImage(result.data)
                
                
            })
            .catch((err) => {
                console.log(err)
            })
    })
    useEffect(() => {
        fetchPost();
    }, [image]);


    return(
        
    <div>
    
    <Container style={{marginTop:'10px'}}>
    <Row>
    <Col md={{ span: 6, offset: 3 }}>
    
    <Card style={{backgroundColor:'powderblue' }}>
      <Card.Img variant="top" src='https://picsum.photos/200/300' style={{height:'300px',width:'100%'}}/>
      <Card.Body>
        <Card.Text>
         Fetches Random Images Click on Button
        </Card.Text>
        <Button variant="primary" onClick={fetchPost}>Next</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container>
    </div>
    )
}
export default Random;

