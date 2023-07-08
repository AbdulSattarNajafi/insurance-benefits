import PrimaryButton from '../buttons/primary-button';
import classes from './step-2.module.css';

const Step2 = ({ onYes, onNo }) => {
    return (
        <div className={classes.step}>
            <h2>Great, are you on Medicaid or Medicare?</h2>

            <div className={classes['step__button']}>
                <PrimaryButton text='Yes' onClick={onYes} />
                <PrimaryButton text='No' onClick={onNo} />
            </div>
        </div>
    );
};

export default Step2;
