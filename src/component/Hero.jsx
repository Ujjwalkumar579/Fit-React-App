import React from 'react'
import Header from './Header/Header';
import './Hero.css';
import '../App.css';
import heroImg from '../assets/hero_image.png';
import heroBg from '../assets/hero_image_back.png';
import calorieBar from '../assets/calorieBar.png';
import heart from '../assets/heart.png';
import { motion } from 'framer-motion'
const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth<=768 ? true :false;

    return (
        <div>
            <div className="hero">
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile?"180px":'238px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}>
                        </motion.div>
                        <span>the best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>

                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>

                    </div>

                    <div className="figures">
                        <div>
                            <span>+140</span><span>expert coachs</span>
                        </div>
                        <div>
                            <span>+978</span><span>members joined</span>
                        </div>
                        <div>
                            <span>+50</span><span>fitness programs</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>


                </div>
                <div className="right-h">
                    <button className='btn'>Join Now</button>

                    <motion.div
                        transition={transition}
                        whileInView={{ right: '4rem' }}
                        initial={{ right: '-1rem' }}
                        className="heart-rate">
                        <img src={heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>

                    <img src={heroImg} alt="" className='hero-img' />
                    <motion.img
                    initial={{right:'12rem'}}
                    whileInView={{right:'21rem'}}
                    transition={{transition}}
                     src={heroBg} alt="" className='hero-img-back' />

                    <motion.div
                        transition={transition}
                        whileInView={{ right: '28rem' }}
                        initial={{ right: '37rem' }}
                        className="calories">
                        <img src={calorieBar} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 Kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
