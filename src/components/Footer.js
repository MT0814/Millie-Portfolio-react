import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Footer() {
    return (
        <footer className="bd-footer py-5">
            <div className="container py-5">
                <div className="row">

                    <div className="col-lg-4 mb-3">
                        <h5 id="contact">Contact Me</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="mailto: millie_tsai@me.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                            <li className="mb-2"><a href="https://www.linkedin.com/in/millietsai/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li className="mb-2"><a
                                href="https://drive.google.com/drive/folders/1LF-2nP1rzXr_cveN0AO-AkEG3G9NL9XO?usp=sharing"
                                target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <h5 id="contact">Follow Me</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/MT0814?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li className="mb-2"><a href="https://www.instagram.com/milliecookies16/" target="_blank" rel="noopener noreferrer">Instagram</a></li>

                        </ul>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <a href="#about">
                            <h2 className="fs-5">MILLIE TSAI</h2>
                        </a>
                        <ul className="list-unstyled">
                            <li className="mb-2" style={{ color: 'white' }}>Designed and built by Millie Tsai.</li>
                            <li><a href="https://icons8.com/icon/82749/menu" target="_blank" rel="noopener noreferrer">Menu icon by Icons8</a></li>
                            <li class="mb-2">© 2022 Millie Tsai @UW Boot Camp. All Rights Reserved.</li>

                        </ul>
                    </div>


                </div>
            </div>

        </footer >
    )
}

export default Footer;