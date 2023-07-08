import { useContext } from 'react';

import { StepContext } from '../context/step-context';
import Phone from './../assets/icons/phone-call.svg';
import Arrow from './../assets/icons/link-arrow.svg';
import classes from './footer.module.css';

const Footer = () => {
    const { step } = useContext(StepContext);

    return (
        <footer className={classes.footer}>
            <div className={classes['footer__top']}>
                <div className='container'>
                    <div className={classes['footer-line']}></div>

                    <div className={classes['footer__top-content']}>
                        <h5>Privacy Policy | Terms of Use | Licenses & Disclosure </h5>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                            quia dolor sit amet
                        </p>
                    </div>
                </div>
            </div>

            {step !== 4 && step !== 5 && (
                <div className={classes['footer__bottom']}>
                    <div className='container'>
                        <div className={classes['footer__bottom-content']}>
                            <div className={classes['footer__phone']}>
                                <a
                                    href='tel:+91 18888888888'
                                    className={classes['footer__phone-phone']}
                                >
                                    <img src={Phone} alt='Phone Icon' />
                                </a>
                                <div className={classes['footer__phone-number']}>
                                    <p>Call Before 8:00 PM EST</p>
                                    <a
                                        href='tel:+91 18888888888'
                                        className={classes['footer__phone-link']}
                                    >
                                        +91 18888888888
                                    </a>
                                </div>
                            </div>

                            {step === 1 && (
                                <div className={classes['footer__link']}>
                                    <a href='tel:+91 18888888888'>
                                        <img src={Arrow} alt='Arrow Icon' />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
