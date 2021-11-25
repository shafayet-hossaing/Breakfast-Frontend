import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{background: "#0a3d62"}} className="footerBg text-white p-5">
      <Row className="container ms-5">
        <Col md={3}>
          <h4 className="mb-4">We Specially Focused On</h4>
          <ul>
            <li>Basic Weights</li>
            <li>Stretching Exercises</li>
            <li>Aerobics Program</li>
            <li>Abs Workout</li>
            <li>High Jump</li>
            <li>Bally</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4 className="mb-4 ms-2">Teachers</h4>
          <ul>
            <li>Harry: from India</li>
            <li>Jon: from America</li>
            <li>Steve: from London</li>
            <li>Rock: from Canada</li>
            <li>Mosh: from Africa</li>
            <li>Smith: from Australia</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4>To Know More About US</h4> <br />
          <p>Phone: 01356987456</p>
          <p>Email: programming@gmail.com</p>
          <Button className="btn btn-light">
            Click Here To Read About Us More
          </Button>
        </Col>
        <Col md={3}>
          <h4>Send Your Mail</h4>
          <textarea
            placeholder="Your Text Goes Here"
            className="form-control footerBg mb-4"
            cols="30"
            rows="3"
          ></textarea>
          <Button className="btn btn-light">
            Contact Us
          </Button>
        </Col>
      </Row>
    </div>
    );
};

export default Footer;