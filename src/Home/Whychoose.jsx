import React, { useContext } from 'react';
import image1 from "./1.svg"
import image2 from "./2.svg"
import image3 from "./3.svg"
import image4 from "./4.svg"
import image5 from "./5.svg"
import { AuthContext } from '../Providers/Authprovider';


const Whychoose = () => {
    const {loading} = useContext(AuthContext);
    return (
        <div>
            <p className='mx-auto text-center text-3xl font-bold text-[#FF3811] my-3'>Why Choose Us</p>
            <p className='mx-auto text-center text-[#737373] text-xl my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti harum molestias, nisi reprehenderit inventore itaque quos illum sit eligendi odio.</p>

            <div className='flex gap-0 mx-auto text-center'>

                <div  className='border-2 p-10 rounded-lg mx-auto text-center hover:bg-[#FF3811] hover:text-white'>
                    <img src={image1} alt="" />
                    <p>Expert Team</p>
                </div>
                <div  className='border-2 p-10 rounded-lg   mx-auto text-center hover:bg-[#FF3811] hover:text-white'>
                    <img src={image2} alt="" />
                    <p>Timely Delivery</p>
                </div>
                <div  className='border-2 p-10 rounded-lg mx-auto text-center hover:bg-[#FF3811] hover:text-white'>
                    <img src={image3} alt="" />
                    <p>24/7 Support</p>
                </div>
                <div  className='border-2 p-10 rounded-lg mx-auto text-center hover:bg-[#FF3811] hover:text-white'>
                    <img src={image4} alt="" />
                    <p>Best Equipment</p>
                </div>
                <div  className='border-2 p-10 rounded-lg mx-auto text-center hover:bg-[#FF3811] hover:text-white'>
                    <img src={image5} alt="" />
                    <p>100% Guarantee</p>
                </div>


            </div>
        </div>
    );
};

export default Whychoose;