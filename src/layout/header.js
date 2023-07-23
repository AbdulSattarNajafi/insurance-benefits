import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Logo from './../assets/images/logo.svg';
import ArrowDown from './../assets/images/arrow-down.svg';
import classes from './Header.module.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isSmallHeader, setIsSmallHeader] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const togglerMenuHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    const visitHomePage = () => {
        setShowMenu(false);
        if (pathname !== '/') {
            navigate('/');

            setTimeout(() => {
                const plansSection = document.getElementById('plans');

                plansSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }, 600);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setIsSmallHeader(window.pageYOffset > 80));
        }
    }, []);

    return (
        <>
            <header
                className={`${classes.header} ${isSmallHeader ? 'header-shadow' : '80px'}`}
                style={{ height: `${isSmallHeader ? '60px' : '80px'}` }}
            >
                <div className='container'>
                    <div className={classes.nav}>
                        <Link to='/' className={classes['header-logo']}>
                            <img src={Logo} width='auto' height='auto' alt='PrepBox Logo' />
                        </Link>
                        <div
                            className={`${classes.menu} ${
                                showMenu ? `${classes['show-menu']}` : ''
                            }`}
                            style={{ top: `${isSmallHeader ? '60px' : '80px'}` }}
                        >
                            {/* ============ Header Dropdowns ============= */}
                            <ul className={classes.dropdown}>
                                <li className={classes['dropdown__item']}>
                                    <div className={classes['dropdown__item-button']}>
                                        <span>Why PrepBox</span>
                                        <img
                                            src={ArrowDown}
                                            width='auto'
                                            height='auto'
                                            alt='Arrow Icon'
                                        />
                                    </div>

                                    <div className={classes['dropdown-content']}>
                                        <ul className={classes['dropdown__list']}>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/' onClick={hideMenu}>
                                                    Home Page
                                                </Link>
                                            </li>
                                            <li className={classes['dropdown__list-item']}>
                                                <ScrollLink
                                                    to='plans'
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={700}
                                                    onClick={visitHomePage}
                                                >
                                                    Pricing & Schedule
                                                </ScrollLink>
                                            </li>
                                            {/* <li className={classes['dropdown__list-item']}>
                                                <Link to='/' onClick={hideMenu}>
                                                    TBD
                                                </Link>
                                            </li>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/' onClick={hideMenu}>
                                                    TBD
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>

                                <li className={classes['dropdown__item']}>
                                    <div className={classes['dropdown__item-button']}>
                                        <span>About Us</span>
                                        <img
                                            src={ArrowDown}
                                            width='auto'
                                            height='auto'
                                            alt='Arrow Icon'
                                        />
                                    </div>

                                    <div className={classes['dropdown-content']}>
                                        <ul className={classes['dropdown__list']}>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/tutor' onClick={hideMenu}>
                                                    Our Tutors & Team
                                                </Link>
                                            </li>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/blog' onClick={hideMenu}>
                                                    Blog
                                                </Link>
                                            </li>
                                            {/* <li className={classes['dropdown__list-item']}>
                                                <Link to='/' onClick={hideMenu}>
                                                    TBD
                                                </Link>
                                            </li>
                                            <li className={classes['dropdown__list-item']}>
                                                <Link to='/' onClick={hideMenu}>
                                                    TBD
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            {/* ============ Header Buttons ============= */}
                            <div className={classes['header__button']}>
                                {/* <a
                                    href='https://calendly.com/d/hw9-7wv-n3y/assessment?month=2023-07'
                                    className={classes['header__button-login']}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Log in
                                </a> */}
                                <a
                                    href='https://prepboxfirstclass.paperform.co/'
                                    className={classes['header__button-try']}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Try for free
                                </a>
                            </div>
                        </div>

                        {/* ============ Mobile Menu Button ============= */}
                        <div className={classes['toggler-container']}>
                            <a
                                href='https://prepboxfirstclass.paperform.co/'
                                className={`${classes['header__button-try']} ${classes['header__button-try-sm']}`}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Try for free
                            </a>

                            <button
                                className={`${classes.toggler} ${
                                    showMenu ? `${classes.open}` : ''
                                }`}
                                onClick={togglerMenuHandler}
                            >
                                <span className={classes['toggler__top']}></span>
                                <span className={classes['toggler__middle']}></span>
                                <span className={classes['toggler__bottom']}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`${classes.backdrop} ${showMenu ? `${classes['show-backdrop']}` : ''}`}
                onClick={togglerMenuHandler}
            ></div>
        </>
    );
};

export default Header;
