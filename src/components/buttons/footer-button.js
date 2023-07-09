import Phone from './../../assets/icons/phone-call.svg';
import classes from './footer-button.module.css';

const FooterButton = () => {
    return (
        <div className={classes['btn-wrapper']}>
            <div className='container'>
                <a href='tel:+91 18888888888' className={classes.btn}>
                    <span className={classes['btn-icon']}>
                        <img src={Phone} alt='Phone Icon' />
                    </span>
                    <span>+91 18888888888</span>
                </a>
            </div>
        </div>
    );
};

export default FooterButton;
