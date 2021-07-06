import React from 'react';
import InfoCard from '../InfoCard/InfoData';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infosDaa = [
    {
        title:'Opening Hours',
        description:'We are open 7 days',
        icon:faClock,
         background:'primary'
    },

    {
        title:'Visit Our Location',
        description:'New York, Brokelyn 1009, USA',
        icon:faMapMarker,
        background:'dark'
    },

    {
        title:'Call Us Now',
        description:'We are open 7 days',
        icon:faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-85 row">
            {
               infosDaa.map(info=> <InfoCard info={info}></InfoCard>)  
            }
            </div>
        </section>
    );
};

export default BusinessInfo;