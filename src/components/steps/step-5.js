import classes from './step-5.module.css';

const Step5 = ({ image }) => {
    return (
        <div className={classes.step}>
            <div className={classes['step__image']}>
                <img src={image} alt='Not Eligible' />
            </div>
            <h2>
                We apologize, but it doesn't appear you are eligible at this time. Please call us
                back if that changes.
            </h2>
        </div>
    );
};

export default Step5;
