import React from 'react';

const ServiceDetail = (props) => {
const {name,img} = props.service;
    return (
        <div className="col-md-4 text-center">
            <div className="">
                <img style={{height:'45px'}} src={img} alt="" />
                <p className="pt-2">{name}</p>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, aperiam?</p>
            </div>
        </div>
    );
};

export default ServiceDetail;