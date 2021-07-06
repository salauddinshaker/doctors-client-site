import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>

                    <div className="col-md-7 align-self-center">
                        <h2>Exceptional Dental Care, on Your term.</h2>
                        <p className="text-secondary my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, saepe.</p>
                        <button>Service</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedService;