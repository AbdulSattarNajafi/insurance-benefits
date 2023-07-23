import classes from './Primary-button.module.css';

const PrimaryButton = ({ text }) => {
    return (
        <a
            href='https://prepboxfirstclass.paperform.co/'
            target='_blank'
            rel='noreferrer'
            className={classes.btn}
        >
            {text}
        </a>
    );
};

export default PrimaryButton;
