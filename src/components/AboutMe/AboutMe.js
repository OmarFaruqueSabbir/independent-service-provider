import React from 'react';
import './AboutMe.css'
import me from '../../images/me2.jpg'

const AboutMe = () => {
    return (
        <div className=''>
            <section className='sctn' >
                <div className="image1">
                    <img src={me} alt='' />
                </div>

                <div className="content1">
                    <h2>About Me</h2>
                    <span></span>
                    <p >Assalamu Alaikum. I'm Sabbir from Chattogram. I started baking from my school days & it's become my passion-profssion both now. Currently i'm running my business from my home office. Planning to expand it by opening a cafe.. So here's goal is to bake more & bring smile on my customers faces.. </p>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;