import classes from './primary-button.module.css';

const PrimaryButton = ({ text, onClick }) => {
    return (
        <button type='button' className={classes.btn} onClick={onClick}>
            {text}
        </button>
    );
};

export default PrimaryButton;
