import Instagram from './../assets/images/instagram.svg';
import Youtube from './../assets/images/youtube.svg';
import Linkedin from './../assets/images/linkedin.svg';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes['footer-content']}>
                    <div className={classes['footer__copyright']}>
                        <h5>Your personal math coach</h5>
                        <p>
                            &copy; {new Date().getFullYear()} - PrepAnywhere Inc. All Right
                            Reserved. 8 Heintzman Cres., Maple, ON, Canada
                        </p>
                    </div>

                    <div className={classes['footer__social']}>
                        <ul className={classes['footer__social-list']}>
                            <li>
                                <a
                                    href='https://www.instagram.com/prepboxmath'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        src={Instagram}
                                        width='auto'
                                        height='auto'
                                        alt='Instagram icon'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.youtube.com/watch?v=ih3hNg5Y-4c'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        src={Youtube}
                                        width='auto'
                                        height='auto'
                                        alt='Instagram icon'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.linkedin.com/company/prepboxmath'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        src={Linkedin}
                                        width='auto'
                                        height='auto'
                                        alt='Instagram icon'
                                    />
                                </a>
                            </li>
                        </ul>

                        <div className={classes['footer__links']}>
                            <a
                                href='https://docs.google.com/document/d/15plLIrlTlMbqiwlLCWeSOIKKNVhM2r11xYJyXSmhGC8/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='https://docs.google.com/document/d/1Rfj4Wr1fdJtcz1z1IbBZXH-4RhBQSWvKehl8034dkpM/edit#heading=h.h3j23o9bt7an'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
