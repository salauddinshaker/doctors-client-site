import React from 'react';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import eliza from '../../../images/eliza.png';
import TestimonialCard from '../TestimonalCard/TestimonialCard';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: eliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                </div>
                <div className="row">
                    <div className="d-flex mt-5">
                        {
                            testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Testimonials;