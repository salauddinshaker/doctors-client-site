import React from 'react';
import fluride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluride Treatment',
        img: fluride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]
const Services = () => {
    return (
        <div className="service-container mt-5">
            <div className="text-center">
                <h4 style={{color:'#1CC7C1'}}>OUR SERVICES</h4>
                <h2>Services We Provide</h2>
            </div>
            
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-3 mb-3">
                {
                    serviceData.map(service=> <ServiceDetail key={service.name} service ={ service}></ServiceDetail>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;