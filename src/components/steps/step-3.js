import { useState, useEffect } from 'react';
import classes from './step-3.module.css';

const Step3 = ({ image, step, onNextStep }) => {
    const [title, setTitle] = useState('Confirming Your Eligibility…');

    useEffect(() => {
        if (step === 3) {
            const titleTimer = setTimeout(() => {
                setTitle('Locating Your Best Options...');
            }, 1500);

            const nextStepTimer = setTimeout(() => {
                onNextStep();
            }, 3000);

            return () => {
                clearTimeout(titleTimer);
                clearTimeout(nextStepTimer);
            };
        }
    }, [step, onNextStep]);

    return (
        <div className={classes.step}>
            <div className={classes['step__loader']}>
                <img src={image} alt='Loader' />
            </div>
            <h2 className='text-center'>{title}</h2>
        </div>
    );
};

export default Step3;
