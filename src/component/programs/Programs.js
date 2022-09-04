
import React from 'react'
import './programs.css'
import {programsData} from '../../assets/data/programsData';
import RightArrow from '../../assets/arrow-right.png';
const Programs = () => {

    // $(document).ready(function(){
    //     $('.category').on('mouseenter',function(e){
    //         x = e.pageX - $(this).offset().left,
    //         y = e.pageY - $(this).offset().top;
    //         $(this).find('span').css({top:y,left:x})

    //     })
    // })

// function directionEffectOnEnter(e){
//     let x = e.pageX - e.target.children[1].offsetLeft;
//     let y = e.pageY - e.target.children[1].offsetTop;

//      e.target.children[1].style.top =`${y}px`;
//      e.target.children[1].style.left =`${x}px`;

// // console.log(e.pageX);
// // console.log(e.target.children[1]);
// }

// function directionEffectOnLeave(e){
//     let x = e.pageX - e.target.children[1].offsetLeft;
//     let y = e.pageY - e.target.children[1].offsetTop;

//      e.target.children[1].style.top =`${y}px`;
//      e.target.children[1].style.left =`${x}px`;
// }

  return (
    <div className='programs' id='programs'>
      <div className="programs-header">
        <span className='stroke-text'>Expl0ore</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="program-categories">
        {
            programsData.map((program,index)=>{
                return <div key={index} className="category" >
                    {program.image}
                    {/* <span className='hoverEf'></span> */}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            })
        }
      </div>
    </div>
  );
}
  

export default Programs

