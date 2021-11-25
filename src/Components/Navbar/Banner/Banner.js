import React from 'react';
const img = "https://image.freepik.com/free-vector/online-food-delivery-grocery-order-service-banner_107791-2153.jpg"

const Banner = () => {
    return (
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="text-danger">Get Your BreakFast</h2>
                            <p className="my-3">We are delivering the breakfast in the morning, no more tension to make <br /> breakfast and get up early in the morning it make it. Just what you <br /> need to do is, do let us know what you wanna take as breakfast <br /> and when you need it in the morning.</p>
                            <button className="btn btn-danger">More About Us</button>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://ooffayuc.sirv.com/way-concept-illustration_114360-1191.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;