import NotEligible from './../../assets/images/not-eligible.svg';
import classes from './step-5.module.css';

const Step5 = () => {
    return (
        <div className={classes.step}>
            <div className={classes['step__image']}>
                <img src={NotEligible} alt='Not Eligible' />
            </div>
            <h2>
                We apologize, but it doesn't appear you are eligible at this time. Please call us
                back if that changes.
            </h2>
        </div>
    );
};

export default Step5;
