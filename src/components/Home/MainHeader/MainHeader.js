import React from 'react';
import chair from '../../../images/chair.png';

const MainHeader = () => {
    return (
        <main style={{height:'400px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h2 style={{color:'#3a4256'}}>Your New Smile <br /> Starts Here..</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae minus id, aliquam sed officia?</p>
                <button className="btn btn-primary">
                    Get Appointment
                </button>
                
            </div>
            <div className="col-md-5">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default MainHeader;