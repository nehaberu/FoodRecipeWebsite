import React from 'react';
import './About.scss';
import food from '../../../src/images/aboutimg.jpg';

const About = () => {
    return (
        <div>
            <div id="about_title">
                About
            </div>
            <div id = "image_holder">
                <img id = "aboutimg" align = "left" src = {food}/>
            </div>
            <div id = "about">                
                    <p>&nbsp;&nbsp;&nbsp;This is a website created by us for cooking enthusiasts. Our users can save and review previously saved recipes. This will be their very own cookbook, containing steps, difficulty level, duration time and images of the recipes uploaded by them respectively. Happy cooking!</p>
            </div>
        </div>
    );
}

export default About;