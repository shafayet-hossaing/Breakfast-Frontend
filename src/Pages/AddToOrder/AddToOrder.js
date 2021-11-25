import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AddToOrder = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const [service, setService] = useState()
    const history = useHistory()
    

    const { register, reset, handleSubmit, setFocus, watch, formState: { errors } } = useForm();

    // Single Data Load
    useEffect(()=>{
        axios.get(`https://serene-fjord-97183.herokuapp.com/singleDataLoad/${id}`)
        .then(res => {
            setService(res?.data);
        })
    },[])

    const onSubmit = data => {
        data.orderStatus = "Pending"
        const email = user?.email && user.email
        data.email = email
        data.productId = id
        // Post Data For OrderPlace
        axios.post('https://serene-fjord-97183.herokuapp.com/orderedData', data)
        .then(res => {
            if(res.data.acknowledged){
                alert("Added Successfully")
                reset()
                history.push('/yourOrders')
            }
        })
    };

    return (
        <div className="container">
            <h1 className="fw-bold text-center mt-5 mb-4 text-danger">Add To Your Orders</h1>
            <Row className="d-flex align-items-center">
                <Col className="px-5" md={6}>
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Your Name</label>
                            <input {...register("name", { required: true })} placeholder="Your Name" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Your Address</label>
                            <input {...register("address", { required: true })} placeholder="Your Address" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Your Phone Number</label>
                            <input {...register("number", { required: true })} placeholder="Your Phone Number" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary me-2 mb-3">Add To Orders</button>
                        </div>
                    </form>
                </Col>
                <Col md={6}>
                    <img src="https://ooffayuc.sirv.com/way-concept-illustration_114360-1191.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default AddToOrder;