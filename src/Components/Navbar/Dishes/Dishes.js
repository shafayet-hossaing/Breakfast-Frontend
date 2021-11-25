import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Dishes = () => {
    return (
        <div>
            <div className="container" style={{marginTop: "120px"}}>
                <h1 className="text-danger text-center mb-5">Special Dishes Delivery Time</h1>
                <Row>
                    <Col md={6}>
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="top" style={{borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", height: "242px"}} className="img-fluid" src="https://ooffayuc.sirv.com/148fed1a1620ba73fb830275e0cf0f72_44c57fb4-5065-456d-8ffd-3c25b6e78f2e-large-landscape-150.jpg" /></Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <span className="text-danger fw-bold">7 in the morning</span>
                                        <Card.Title className="mt-2">Special Pasta</Card.Title>
                                        <Card.Text>
                                            This is one of the best breakfast we deliver in the morning at 6:50. So that you don't need to make it in your home. 
                                        </Card.Text>
                                                    <Button className="btn-danger py-1" variant="primary">Details</Button>
                                    </Card.Body>
                                </Col>
                            </Row> 
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="top" style={{borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", height: "242px"}} src="https://ooffayuc.sirv.com/gajar-ka-halwa.jpg" /></Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <span className="text-danger fw-bold">7:40 in the morning</span>
                                        <Card.Title className="mt-2">Carrot Halua</Card.Title>
                                        <Card.Text>
                                            This is the food that is being ordered the most in the morning. You may try it out. We'll deliver it to your home if you want.
                                        </Card.Text>
                                            <Button className="btn-danger py-1" variant="primary">Details</Button>
                                    </Card.Body>
                                </Col>
                            </Row> 
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="top" style={{borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", height: "242px"}} src="https://ooffayuc.sirv.com/Hajir-Biryani.jpg" /></Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <span className="text-danger fw-bold">8:30 in the morning</span>
                                        <Card.Title className="mt-2">Kacchi Biryani</Card.Title>
                                        <Card.Text>
                                            Kacchi Biryani is also one of the most popular item we deliver. But for it you have let us know one day before and we'll deliver it.
                                        </Card.Text>
                                                    <Button className="btn-danger py-1" variant="primary">Details</Button>
                                    </Card.Body>
                                </Col>
                            </Row> 
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Row>
                                <Col md={6}>
                                    <Card.Img variant="top" style={{borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", height: "242px"}} src="https://ooffayuc.sirv.com/chicken-fried-rice.jpg" /></Col>
                                <Col md={6}>
                                    <Card.Body>
                                        <span className="text-danger fw-bold">7:40 in the morning</span>
                                        <Card.Title className="mt-2">Fried Rice</Card.Title>
                                        <Card.Text>
                                            Fried Rice is very healthy food for us and we all should have this in the morning. So, we deliver it whenever you want. All time.
                                        </Card.Text>
                                                    <Button className="btn-danger py-1" variant="primary">Details</Button>
                                    </Card.Body>
                                </Col>
                            </Row> 
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dishes;