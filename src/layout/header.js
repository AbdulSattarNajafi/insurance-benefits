import { useContext } from 'react';

import { StepContext } from '../context/step-context';
import Logo from './../assets/images/logo-large.png';
import Arrow from './../assets/icons/chevron-left.svg';
import classes from './header.module.css';

const Header = () => {
    const { step, dispatch } = useContext(StepContext);

    const prevStep = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes['header-content']}>
                    {step !== 1 && (
                        <button
                            type='button'
                            className={classes['header__button']}
                            onClick={prevStep}
                        >
                            <img src={Arrow} alt='Arrow Icon' />
                        </button>
                    )}

                    <img
                        src={Logo}
                        className={classes['header-logo']}
                        alt='Insurance Benefits Logo'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
