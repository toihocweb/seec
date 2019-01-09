import React, { Component } from 'react'
import { Link } from '@reach/router'
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand page-scroll" as={Link} href="#page-top"><img src="/assets/images/logo.svg" alt="Sanza theme logo" /></a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">

                                <li>
                                    <a as={Link} href='#about' className="page-scroll" >About</a>
                                </li>
                                <li>
                                    <a as={Link} href='#services'  className="page-scroll">Services</a>
                                </li>
                                <li>
                                    <a as={Link} href='#portfolio'  className="page-scroll">Portfolio</a>
                                </li>
                                <li>
                                    <a as={Link} href='#team'  className="page-scroll">Team</a>
                                </li>
                                <li>
                                    <a as={Link} href='#contact'  className="page-scroll">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
