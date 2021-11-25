import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from '../../Components/Contact/Contact';
import Banner from '../../Components/Navbar/Banner/Banner';
import Dishes from '../../Components/Navbar/Dishes/Dishes';
import useAuth from '../../Hooks/useAuth';
import './Home.css';
// import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const {isLoading} = useAuth()
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios.get('https://serene-fjord-97183.herokuapp.com/getServices')
        .then(res => {
            setServices(res.data)
        })
    },[])
    return (
        <div className="container">
            <Row>
            {
                isLoading && 
                    // showing spinner when reload.
                    <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
                }
                <Banner></Banner>
                <h1 className="text-center text-danger my-5">Main Services Delivery Time</h1>
                {
                    services.map(service => <Col key={service._id} lg={3} md={4} >
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Card.Img variant="top" className="img-fluid" style={{borderTopRightRadius: "15px", borderTopLeftRadius: "15px", height: "220px"}} src={service?.img} />
                            <Card.Body>
                                <span className="text-danger fw-bold col-md-8 rounded-3">{service?.time} Morning [Delivery Time]</span>
                                <Card.Title className="mt-2">{service?.name}</Card.Title>
                                <Card.Text>
                                    {service?.description}
                                </Card.Text>
                                        <div className="row">
                                            <div className="col-4">
                                            <Link to={`/addToOrder/${service._id}`}><Button className="btn-danger py-1" variant="primary">Order</Button></Link>
                                            </div>
                                            <div className="col-8 justify-content-end d-flex">
                                                <span className="text-danger fw-bold">Delivery: {service?.charge}</span>
                                            </div>
                                        </div>

                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
            <Dishes></Dishes>
            <Contact></Contact>
        </div>
    );
};

export default Home;