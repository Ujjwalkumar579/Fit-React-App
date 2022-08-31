import React, { useState } from 'react';
import './Testimonials.css';
import testimonialData from '../../assets/data/testimonialsData';
import arrowRight from '../../assets/arrow-right.png';
import arrowLeft from '../../assets/left-arrow.png';
import { motion } from 'framer-motion';
const Testimonials = () => {

    const transition = { type: 'spring', duration: 3 };
    const [selected, setSelected] = useState(0);
    const tLength = testimonialData.length;

    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>

                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ transition }}
                >
                    {
                        testimonialData[selected].review
                    }
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialData[selected].name}
                    </span> {" "}
                    - {testimonialData[selected].status}
                </span>

            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>

                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ transition }}
                    src={testimonialData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)
                        }}
                        src={arrowLeft} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                        }}
                        src={arrowRight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
