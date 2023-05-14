import React from 'react';

const ServiceCard = ({service}) => {
    const {title,img,price,description} = service;
    return (
        <div className="card w-96 glass shadow-lg shadow-indigo-500/50 ">
      <figure><img src={img} alt=""/></figure>
      <div className="card-body">
        <h2 className="card-title">Service: {title}</h2>
        {/* <p className='text-center justify-center'><span className='font-bold'>Description: </span> {description}</p> */}
        <p className='font-bold'>Charge: {price} BDT</p>
        <div className="card-actions justify-end">
        <button className="btn btn-warning mx-auto my-2">Book Now</button>
        </div>
      </div>
    </div>
    );
};

export default ServiceCard;