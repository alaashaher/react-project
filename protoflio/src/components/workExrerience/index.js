import React, { Component } from 'react';
import './index.css'
export default class WorkExperience extends Component {
    render() {
        let WorkExrerience = {
            work1: 'Front-end Web Develper',
            data1: 'Jun 2016 - Now',
            work2: 'Design Assistant',
            data2: 'Mar 2015 - Dec 2015',
        };

        let Education = {
            Education1: 'Department of Information Management',
            data1: 'Set 2010 - Jun 2014',
            Education2: 'Department of Data Processing',
            data2: 'Set 2007 - Jun 2010',
        };
        return (
            <div>
                <div className="resume">
                    <div className="func">
                        <div className="workExperience container row func">
                            <div className="work col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h3><i className="fa fa-briefcase"></i>Work Exrerience</h3>
                                <ul>
                                    <li><span>{WorkExrerience.work1}</span><small>{WorkExrerience.data1}</small></li>
                                    <li><span>{WorkExrerience.work2}</span><small>{WorkExrerience.data2}</small></li>
                                </ul>
                            </div>
                            <div className="edu col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h3><i className="fa fa-graduation-cap"></i>Education</h3>
                                <ul>
                                    <li><span>{Education.Education1}</span><small>{Education.data1}</small></li>
                                    <li><span>{Education.Education2}</span><small>{Education.data1}</small></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
