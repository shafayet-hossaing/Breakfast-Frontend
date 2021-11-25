import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './YourOrders';

const YourOrders = () => {
    const [services, setServices] = useState([])
    const {user} = useAuth()
    const email = user?.email && user.email
    useEffect(()=>{
        if(email){
            axios.get(`https://serene-fjord-97183.herokuapp.com/orderedDataLoad/${email}`)
            .then(res => {
                setServices(res.data)
            })
        }
        
    },[email])
    
    const [ordersData, setOrdersData] = useState([])
    console.log(ordersData);
    useEffect(()=>{
        axios.get('https://serene-fjord-97183.herokuapp.com/getAllOrders')
        .then(res => {
            setOrdersData(res.data)
        })
    },[])

    const handleDelete = id => {
        axios.delete(`https://serene-fjord-97183.herokuapp.com/deleteOrders/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                alert("Deleted")
                const remainingData = services.filter(service => service._id !== id)
                setServices(remainingData)
            }
        })
    }
    
    return (
        <div className="container">
            <Row>
                <h2 className="text-center my-5">The Services You Clicked</h2>
                {
                    services.map(service => <Col key={service._id} md={3}>
                        <Card className="shadow mb-4" style={{borderRadius: "15px"}}>
                            <Card.Img className="img-fluid" style={{borderTopRightRadius: "15px", borderTopLeftRadius: "15px", height: "220px"}} variant="top" src={service?.img} />
                            <Card.Body>
                                <Card.Title className="mt-2">{service?.name}</Card.Title>
                                <Card.Text>
                                    {service?.description}
                                </Card.Text>
                                <Button onClick={() => handleDelete(service._id)} className="me-2" variant="primary">Delete</Button>
                                {
                                    ordersData[0]?.map(data => data?.productId === service?._id && <button className={data?.orderStatus === "Pending" ? "btn btn-danger" : "btn btn-success"}>{data?.orderStatus}</button> )
                                }
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default YourOrders;