import React from 'react'
import './Footer.css'
import git from '../../assets/git.png';
import insta from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
            <div className="Footer-container">
                <hr />
                <div className="footer">
                    <div className="social-links">
                        <img src={git} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedIn} alt="" />
                    </div>
                    <div className="logo-f">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="blur blur-f-1"></div>
                <div className="blur blur-f-2"></div>
            </div>
        
    )
}

export default Footer
