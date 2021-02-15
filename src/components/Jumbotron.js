import React from "react";
import triangle from '../assets/img/obj_triangle.png';

function Jumbotron() {
    return (
        <div className="jumbotron d-flex align-items-center">
            <div className="container text-center">
                <h1 className="display-1 mb-4">JET</h1>
            </div>
            <div className="rectangle-1"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-transparent-1"></div>
            <div className="rectangle-transparent-2"></div>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="triangle triangle-1">
                <img src={triangle} alt=""/>
            </div>
            <div className="triangle triangle-2">
                <img src={triangle} alt=""/>
            </div>
            <div className="triangle triangle-3">
                <img src={triangle} alt=""/>
            </div>
            <div className="triangle triangle-4">
                <img src={triangle} alt=""/>
            </div>
        </div>
    );
}

export default Jumbotron