import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#D2D2D2',}} className={styles.footerBgImg}>
            <footer className={styles.siteFooter}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify" style={{color: '#fff'}}>
                                Dhaka Polytechnic Institute is a government technical institute in Dhaka, Bangladesh. It is the largest and the oldest polytechnic academia in modern Bangladesh. The polytechnic is ranked number one on the Bangladesh Polytechnic Ranking 2018.                            
                            </p>
                        </div>
                        <div className="col-xs-6 col-md-3" style={{ color: '#fff' }}>
                            <h6>Categories</h6>
                            <ul className={styles.footerLinks}>
                                <li style={{ color: '#fff' }}><a href="#">Address: <b>তেজগাঁও শিল্প এলাকা, Dhaka 1208</b> </a></li>
                                <li style={{ color: '#fff' }}><a href="#">Hours: <b>Closed ⋅ Opens 8AM Sat</b> </a></li>
                                <li style={{ color: '#fff' }}><a href="#">Number of students: <b>8,898</b> </a></li>
                                <li style={{ color: '#fff' }}><a href="#">Founded: <b>1955</b> </a></li>
                                <li style={{ color: '#fff' }}><a href="#">Principal: <b>Jakir Hossain</b> </a></li>
                                <li style={{ color: '#fff' }}><a href="#">Notable alumni: <b>Mamunur Rashid, Sultanuddin Ahmed, Jurip Al-Asa</b> </a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className={styles.footerLinks}>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright © 2020 All Rights Reserved by
              <a href="#"> Dpi</a>
                       </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className={styles.socialIcons}>
                                <li><a className={styles.facebook} href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a className={styles.twitter} href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a className={styles.dribbble} href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a className={styles.linkedin} href="#"><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
     </div>
    );
};

export default Footer;