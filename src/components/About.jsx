import React from 'react'
import "../css/About.css"

import img from "../assets/jpg/about.jpg"

function About() {
    return (
        <section className='about section' id="about">

            <h2 className='section_title'>About</h2>

            <div className='aboutContainer bd_grid'>
               
                <div className='about_text_Section'>
                    
                    <p>
                    I'M A SOPHOMORE IT UNDERGRADUATE PURSUING B.TECH AND A PASSIONATE WEB DEVELOPER AND EAGER TO EXPAND MY SKILLS AND LEARN AS MORE AS I MOVE FORWARD. I LOVE TO READ BLOGS ON RECENT TECHNOLOGIES WHICH I HAVE WORKED ON OR GOING TO BE ON AND CONTRIBUTE TO OPEN SOURCE PROJECTS I WORKED ON MY DESIGNING SKILLS, BUILD MY SKILLS BASICALLY ON THE MERN STACK, AND STARTED KEEPING MY GRIP ON COMPETITIVE CODING.
                    </p>

                    
                </div>
                <div className='aboutImg'>
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;
