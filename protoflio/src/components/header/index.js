import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* <nav class="text-center">
                    <ul>
                        <a >home</a>
                        <a >Experience</a>
                        <a >Skills</a>
                        <a >Contact</a>
                    </ul>
                </nav> */}
                <div class="base row">
                    <div class="profile col-12">
                        <div class="photo"><img src="../../../assets/images/32556524_2112831515640928_131524216569724928_n.jpg" /></div>
                        <div class="info">
                            <h4 class="name"></h4><small class="job"></small>
                        </div>
                    </div>
                    <div class="about col-12 text-center">
                        <h3>About me</h3>
                        <br />

                    </div>
                </div> 
            </div>
        );
    }
}
