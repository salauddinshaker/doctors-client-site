import React from 'react';
import Doctor from '../Doctor/Doctor';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import eliza from '../../../images/eliza.png'

const doctorImages =[
    {
        name:'Dr.Ema Watson',
        img:ema
    },
    {
        name:'Dr.Wilson',
        img:wilson
    },
    {
        name:'Dr.Eliza',
        img:eliza
    }
]
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <div className="d-flex">
                        {
                            doctorImages.map(doctor=> <Doctor doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;