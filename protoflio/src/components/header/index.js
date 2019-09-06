import React, { Component } from 'react';
import image from './image-profile.jpg';
import './index.css'
export default class Header extends Component {
    render() {
        let info = {
            name: 'Alaa Shaher sobhy',
            job: 'Front-end Web Develper',
            about: 'I\'am Front-end Develper, have good exprince, keeping learning more tool'
        };
        return (
            <div>
                <div className="base row">
                    <div className="profile col-12">
                        <div className="photo"><img src={image} alt="imageprofile"/></div>
                        <div className="info">
                            <h4 className="name">{info.name}</h4><small className="job">{info.job}</small>
                        </div>
                    </div>
                    <div className="about col-12 text-center">
                        <h3>About me</h3>
                        <br />
                        {info.about}
                    </div>
                </div> 
            </div>
        );
    }
}
