import React, { Component } from 'react';
import Timer from './Timer';
import './styles/hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <h1>Moving Foward</h1>
                <p>A Conference Both Tech and Non-Tech individuals</p>
                <Timer/>
                <div className="clicks">
                    <button className="herobtn">Sign me Up</button>
                    <button className="herobtn">See Speakers</button>
                </div>
            </div>
        )
    }
}

export default Hero
