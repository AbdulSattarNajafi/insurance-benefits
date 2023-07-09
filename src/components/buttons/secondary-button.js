import PhoneIcon from './../../assets/icons/phone-white.svg';
import classes from './secondary-button.module.css';

const SecondaryButton = ({ text, phoneNumber }) => {
    return (
        <a href='tel:+91 18888888888' className={classes.btn}>
            <span className={classes['btn-icon']}>
                <img src={PhoneIcon} alt='Phone Icon' />
            </span>
            <div className={classes['btn__text']}>
                <span className={classes['btn__text-label']}>{text}</span>
                {phoneNumber && <span className={classes['btn__text-phone']}>{phoneNumber}</span>}
            </div>
        </a>
    );
};

export default SecondaryButton;
