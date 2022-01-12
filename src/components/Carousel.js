
import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require("../image/chef.jpg")} className="d-block w-100" alt="chef"></img>
                    <a href="https://chef-recipe-1.herokuapp.com/" target="_blank"><button type="button" className="btn btn-light">Chef
                        Recipe</button></a>
                </div>
                <div className="carousel-item">
                    <img src={require("../image/gamers.jpg")} className="d-block w-100" alt="gaming platform"></img>
                    <a href="https://mt0814.github.io/Project-1_focus-gaming-platform/" target="_blank"><button type="button"
                        className="btn btn-light">Gaming Platform</button></a>
                </div>
                <div className="carousel-item">
                    <img src={require("../image/rain.jpg")} className="d-block w-100" alt="rain"></img>
                    <a href="https://mt0814.github.io/Week6-Weather-dashboard/" target="_blank"><button type="button"
                        className="btn btn-light btn-lg">Weather App</button></a>
                </div>
            </div >
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default Carousel;