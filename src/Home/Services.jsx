import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);


    useEffect( ()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data=>setServices(data))
    } ,[])
    return (
        <div>
        <div>
            <p className='text-5xl text-[#FF3811] font-bold text-center '>Our Services</p>
            <p className='text-xl text-[#737373]  text-center my-3 mx-80'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2 p-20   justify-center gap-1 mx-auto '>
            {
                
                services.map(service => <ServiceCard key={service._id} service={service} />)

            }
        </div>
        <div className="flex items-center h-full">
  <button className="btn btn-warning mx-auto">Show More</button>
</div>

<div className=' h-250px bg-black my-10 text-white flex space-x-20 justify-between px-80 py-20'>
<div>
 <p >We are open Monday-Friday</p>
 <p className='font-extrabold py-2'>7:00 am - 9:00 pm</p>
</div>
<div>
 <p >Have a Question?</p>
 <p className='font-extrabold py-2'>+8801744218960</p>
</div>
<div>
<p>Need a Repair?Our Address</p>
</div>


</div>



    </div>
        
    );
};

export default Services;