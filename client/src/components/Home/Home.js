import React from 'react';
import './Home.scss';
import  desserts1 from '../../../src/images/desserts1.jpg';

const Home = () => {
    return (
        <div>
            <div id='title'>
                <h1>Welcome to your very own cookbook!</h1>
            </div>
            <div id = 'img_holder'>
                <img id = 'dessert' src = {desserts1} />
            </div>
        </div>
    );
}

export default Home;