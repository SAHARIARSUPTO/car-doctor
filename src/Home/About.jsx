import React from 'react';
import image from "./person.jpg";
import image2 from "./parts.jpg";

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative'>
                        <img src={image} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={image2} className="w-1/2 right-20 absolute top-1/2 rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#FF3811] my-3">About Us</h1>
                        <p className="text-5xl font-bold my-3">We are qualified & of experience in this field</p>
                        <p className="text-[#737373] text-xl my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <p className="text-[#737373] text-xl my-3">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;