import React, { Component } from 'react'
import {Link} from '@reach/router'
class Header extends Component {
    render() {
        return (
            <div>
            <header>
                <div class="container">
                    <div class="slider-container">
                        <div class="intro-text">
                            <div class="intro-lead-in">Welcome To SEEC Viet Name</div>
                            <div class="intro-heading">THE BEST SOLUTION TO MAKE A WEBSITE</div>
                            <a href="#about"  as={Link} class="page-scroll btn btn-xl">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}

export default Header
