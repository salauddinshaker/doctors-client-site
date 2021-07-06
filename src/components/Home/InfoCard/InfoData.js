import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './infoCard.css';

const InfoData = ({ info }) => {
    return (
        <div className="col-md-4">
            <div className={`d-flex info-container text-white info-${info.background}`}>
                <div className="icon-style">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoData;