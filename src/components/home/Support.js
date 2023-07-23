import PrimaryButton from '../button/Primary-button';
import Lgcse from './../../assets/images/lgcse.png';
import IBLogo from './../../assets/images/ib.png';
import APLogo from './../../assets/images/ap.png';
import classes from './Support.module.css';

const Support = () => {
    return (
        <section className={classes.support}>
            <div className='container'>
                <div className={classes['support-content']}>
                    <h2>Syllabuses We Support</h2>
                    <div className={classes['support__text-wrapper']}>
                        <div className={classes['support__text']}>
                            <p>
                                We offer a variety of math tutoring that fits our students
                                curriculum, <br /> from regular common core classes to advance
                                placement programs exams.
                            </p>
                            <PrimaryButton text='Try for free' />
                        </div>

                        <div className={classes['support__logo']}>
                            <div className={classes['support__logo-item']}>
                                <img src={Lgcse} width='auto' height='auto' alt='LGCSE logo' />
                            </div>
                            <div className={classes['support__logo-item']}>
                                <img src={IBLogo} width='auto' height='auto' alt='IB logo' />
                            </div>
                            <div className={classes['support__logo-item']}>
                                <img src={APLogo} width='auto' height='auto' alt='AP logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
