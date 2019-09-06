import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
    render() {
        let Contact = {
            tele: '+201024513379',
            location: 'egypt, benha',
            email: 'alaashaher12@gmail.com',
            code: 'codepen.io/alaa_shaher'
        };
        return (
            <div>
                <div class="footer text-center row">
                    <div class="col-12">
                        <div class="contact row">
                            <h3 class="col-12">Contact</h3>
                            <div class="call col-lg-3 col-md-6 col-sm-12"><i class="fa fa-phone"></i><span>{Contact.tele}</span></div>
                            <div class="address col-lg-3 col-md-6 col-sm-12"><i class="fa fa-map-marker"></i><span>{Contact.location}</span></div>
                            <div class="email col-lg-3 col-md-6 col-sm-12"><a href="mailto:alaashaher12@gmail.com" target="_blank"><i class="fa fa-envelope"></i><span>{Contact.email}</span></a></div>
                            <div class="website col-lg-3 col-md-6 col-sm-12"><a href="http://codepen.io/alaa_shaher" target="_blank"> <i
                                class="fa fa-home"></i><span>{Contact.code}</span></a></div>
                        </div>
                        <div class="follow row">
                            <h3 class="col-12">Follow</h3>
                            <div class="box col-12"><a href=""><i class="fa fa-facebook"></i></a><a href=""><i
                                class="fa fa-twitter"></i></a><a href=""><i class="fa fa-pinterest-p"></i></a><a href=""><i
                                    class="fa fa-tumblr"></i></a><a href="https://codepen.io/" target="_blank"><i class="fa fa-codepen"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
