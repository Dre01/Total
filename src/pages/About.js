import React, { Component } from 'react';
import AboutImage from '../assets/h.jpg';
import "../styles/About.css";

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
                <div className="aboutBottom">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non. Sed velit dignissim sodales ut eu sem integer vitae. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Pharetra magna ac placerat vestibulum lectus mauris. In est ante in nibh mauris cursus. Ut venenatis tellus in metus vulputate eu. Fermentum et sollicitudin ac orci phasellus egestas. Id ornare arcu odio ut sem nulla. Pulvinar elementum integer enim neque volutpat ac tincidunt. Feugiat scelerisque varius morbi enim nunc faucibus.</p>
                </div>
            </div>
        )
    }
}
