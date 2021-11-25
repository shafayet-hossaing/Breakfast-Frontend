import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddService = () => {
        const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
        const history = useHistory()
        const onSubmit = data => {
            axios.post('https://serene-fjord-97183.herokuapp.com/addService', data)
            .then(res => {
                if(res.data.acknowledged){
                    alert("Service Added successfully")
                    reset();
                    history.push('/home')
                }
            })
        };




        
    return (
        <div className="container mb-5">
            <h1 className="fw-bold text-center mt-5 mb-4 text-danger">Add Delivery Service</h1>
            <Row className="d-flex justify-content-center align-items-center shadow rounded-3 p-5">
                <Col className="px-5" md={5}>
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Topic Name</label>
                            <input {...register("name", { required: true })} placeholder="Name" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Delivery Time</label>
                            <input {...register("time", { required: true })} placeholder="6,7,8 In The Morning?" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Delivery Charge</label>
                            <input {...register("charge", { required: true })} placeholder="6,7,8 In The Morning" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Image</label>
                            <input {...register("img", { required: true })} placeholder="Image URL" type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Topic Description</label>
                            <textarea {...register("description", { required: true })} placeholder="Description..." type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="col-md-12 d-grid">
                            <button type="submit" className="btn btn-danger mb-3">Add Service</button>
                        </div>
                    </form>
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src="https://ooffayuc.sirv.com/express-courier-scooter-shipping-order_74855-6447-removebg-preview.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default AddService;