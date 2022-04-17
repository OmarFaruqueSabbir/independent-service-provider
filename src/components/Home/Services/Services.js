import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="experts" className='container'>
            <h1 style={{color:'orange',fontFamily:'poppins'}} className='text-center mt-5'>Our Services</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service= {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;