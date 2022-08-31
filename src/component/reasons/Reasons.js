import React from 'react'
import './Reasons.css'
import tick from '../../assets/tick.png';
import nbBrand from '../../assets/nb-Brand.png';
import nike from '../../assets/nike.png';
import addidas from '../../assets/addidas.png';
import reason1 from '../../assets/reason-1.png';
import reason2 from '../../assets/reason-2.png';
import reason3 from '../../assets/reason-3.png';
import reason4 from '../../assets/reason-4.png';

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className="left-r">
                <img src={reason1} alt="" />
                <img src={reason2} alt="" />
                <img src={reason3} alt="" />
                <img src={reason4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>

                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose Us</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                    <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{color:"var(--gray)",fontWeight:'normal',textTransform:'uppercase'}} className='partners-title'>
                    our partners
                </span>

                <div className="partners">
                    <img src={nbBrand} alt="" />
                    <img src={addidas} alt="" />
                    <img src={nike} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Reasons
