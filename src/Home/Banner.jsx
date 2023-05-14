import React from 'react';
import image1 from "./banner/1.jpg"
import image2 from "./banner/2.jpg"
import image3 from "./banner/3.jpg"
import image4 from "./banner/4.jpg"
import image5 from "./banner/5.jpg"
import image6 from "./banner/6.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-[1140px] h-[600px] items-center mx-auto rounded-xl">
                <div id="slide1" className="carousel-item relative w-full rounded-xl">
                    <img src={image5} className="w-full " />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'><a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a></div>
                        
                    </div>
                </div>




                                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 '><a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a></div>
                        
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'><a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a></div>
                        
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'><a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a></div>
                        
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'><a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a></div>
                        
                    </div>

            </div>
            <div id="slide6" className="carousel-item relative w-full">
                    <img src={image6} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-5 rounded-xl">
                    <div>
                        <p className="text-6xl text-white w-[400px]">Affordable Price For Car Servicing</p><br />
                        <p className="text-xl text-white mb-4 w-[500px]">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-warning">Appointment</button>

                    </div>
                    <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'><a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a></div>
                        
                    </div>
                </div>
            </div>
            </div>
        
    );
};

export default Banner;