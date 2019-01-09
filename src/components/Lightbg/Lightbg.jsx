import React, { Component } from 'react'

class Lightbg extends Component {
    render() {
        return (
            <div>
                <section className="light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="section-text">
                                    <h3>WE`RE CREATIVE</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                                    <ul>
                                        <li>Responsive Bootstrap Template</li>
                                        <li>Developer Friendly Code</li>
                                        <li>Creative Freedom Experience</li>
                                        <li>MOOZThemes.com Do Things With Love</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="owl-portfolio owl-carousel">
                                    <div className="item">
                                        <div className="owl-portfolio-item"><img src="images/demo/portfolio-7.jpg" className="img-responsive" alt="portfolio" /></div>
                                    </div>
                                    <div className="item">
                                        <div className="owl-portfolio-item"><img src="images/demo/portfolio-8.jpg" className="img-responsive" alt="portfolio" /></div>
                                    </div>
                                    <div className="item">
                                        <div className="owl-portfolio-item"><img src="images/demo/portfolio-9.jpg" className="img-responsive" alt="portfolio" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Lightbg
