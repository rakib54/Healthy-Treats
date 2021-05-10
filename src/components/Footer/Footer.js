import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

const noNamed = [
    { name: "Healthy Treats" },
    { name: "Rakibur Rahman" }

]
const ourAddress = [
    { name: "Khilkhet,Dhaka" },
    { name: "Uttara,Dhaka" },
    { name: "Dhanmondi,Dhaka" }

]
const Contact = [
    { name: "rakibur74@gmail.com" },
    { name: "01779545426" }

]
const Footer = () => {
    return (
        <footer className="footer-area font-link mt-5">
            <div className="container pt-5">
                <div className="col-md-12 text-lg-start text-center">
                    <div className="row py-5">
                        <div className="col-md-3">
                            {
                                noNamed.map(name => <p>{name.name}</p>)
                            }
                        </div>
                        <div className="col-md-3">
                            {
                                ourAddress.map(name => <p>{name.name}</p>)
                            }
                        </div>
                        <div className="col-md-3">
                            {
                                Contact.map(name => <p>{name.name}</p>)
                            }
                        </div>
                        <div className="col-md-3">
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="https://github.com/rakib54" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/rakibur74/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/rakibur74/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/rakibur74" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>

                            </ul>
                        </div>



                    </div>
                </div>
                <div className="copyRight text-center">
                    <p><small>Copyright {(new Date()).getFullYear()} All Rights Reserved by Rakibur Rahman</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;