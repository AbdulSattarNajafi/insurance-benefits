import { useState, useEffect } from 'react';

import LoaderImage from './../../assets/images/loader.gif';
import classes from './step-3.module.css';

const Step3 = ({ onNextStep }) => {
    const [title, setTitle] = useState('Confirming Your Eligibility…');

    useEffect(() => {
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
    }, [onNextStep]);

    return (
        <div className={classes.step}>
            <div className={classes['step__loader']}>
                <img src={LoaderImage} alt='Loader' />
            </div>
            <h2 className='text-center'>{title}</h2>
        </div>
    );
};

export default Step3;
