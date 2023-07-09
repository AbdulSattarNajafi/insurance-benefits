import HowToWrite from './../../assets/images/how-to-write.png';
import PrimaryButton from '../buttons/primary-button';
import classes from './step-1.module.css';

const Step1 = ({ onNextStep, onNotEligible }) => {
    return (
        <div className={classes.step}>
            <div className={classes['step__header']}>
                <h1>Exciting News!</h1>
                <p>
                    Low Income Americans May Now Qualify For $0 Health Plans and Premium $$$ Tax
                    Credits For Medical Needs.
                </p>
            </div>

            <div className={classes['step__image']}>
                <h4>Check Your Eligibility For Free Right Now!</h4>
                <img src={HowToWrite} alt='How to write' />
            </div>

            <div className={classes['step__ages']}>
                <h2>
                    Are you between the ages of <br /> 26 - 59?
                </h2>
                <div className={classes['step__ages-buttons']}>
                    <PrimaryButton text='Yes' onClick={onNextStep} />
                    <PrimaryButton text='No' onClick={onNotEligible} />
                </div>
            </div>
        </div>
    );
};

export default Step1;
