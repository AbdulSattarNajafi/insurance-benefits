import Congratulations from './../../assets/images/congratulations.png';
import SecondaryButton from '../buttons/secondary-button';
import classes from './step-4.module.css';

const Step4 = () => {
    return (
        <div className={classes.step}>
            <div className={classes['step__image']}>
                <img src={Congratulations} alt='Congratulations' />
            </div>

            <div className={classes['step__text']}>
                <h2>
                    Congratulations! You <br /> may be eligible. <br /> Call Now!
                </h2>
                <SecondaryButton text='Tap To Qualify' phoneNumber='1.888.888.8888' />
            </div>
        </div>
    );
};

export default Step4;
