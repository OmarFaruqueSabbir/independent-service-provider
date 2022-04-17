import React from 'react';

const Service = ({ service }) => {
    const { name, img,price,description } = service;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "20rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 style={{ fontFamily: "cookie",fontSize:'35px' }} className="card-title">{name}</h5>
                    <p className="card-text text-start fst-normal">{description}</p>
                    <p className="card-text  fst-normal"><span style={{ fontWeight:'bold'}}>Price: </span>${price}</p>
                    <button href="#" className="btn btn-danger">Check Here</button>
                </div>
            </div>
        </div>

    );
};

export default Service;