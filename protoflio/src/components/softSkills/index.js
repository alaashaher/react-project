import React, { Component } from 'react';

export default class SoftSkills extends Component {
    render() {
        let skills = {
            skill1: 'Photoshop',
            skill2: 'VS Code',
            skill3: 'Atom',
            skill4: 'Commind Line',
        };
        return (
            <div>
                <div className="resume">
                    <div className="func">
                        <div className="func row">
                            <div className="skills-prog col-lg-6 col-md-6 col-sm-12">
                                <h3><i className="fa fa-code"></i>Programming Skills</h3>
                                <ul>
                                    <li data-percent="92"><span>HTML5 & PUG</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="96"><span>CSS3 & SCSS</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="40"><span>JavaScript</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="60"><span>jQuery</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="33"><span>NodeJS</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="52"><span>Angular</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                    <li data-percent="20"><span>React</span>
                                        <div className="skills-bar">
                                            <div className="bar"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="skills-soft col-lg-6 col-md-6 col-sm-12">
                                <h3><i className="fa fa-th-list"></i>Software Skills</h3>
                                <ul>
                                    <li data-percent="94">
                                        <svg viewbox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45"></circle>
                                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                                        </svg><span>{skills.skill1 }</span><small></small>
                                    </li>
                                    <li data-percent="80">
                                        <svg viewbox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45"></circle>
                                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                                        </svg><span>{skills.skill2 }</span><small></small>
                                    </li>
                                    <li data-percent="89">
                                        <svg viewbox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45"></circle>
                                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                                        </svg><span>{skills.skill3 }</span><small></small>
                                    </li>
                                    <li data-percent="55">
                                        <svg viewbox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45"></circle>
                                            <circle className="cbar" cx="50" cy="50" r="45"></circle>
                                        </svg><span>{skills.skill4 }</span><small></small>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
