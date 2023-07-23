import PlusIcon from './../../assets/images/plus-icon-circle.svg';

import classes from './addition-item.module.css';

const AdditionItem = ({ text }) => {
    return (
        <div className={classes.addition}>
            <div className={classes['addition__icon']}>
                <img src={PlusIcon} width='auto' height='auto' alt='Plus icon' />
            </div>
            <h4>{text}</h4>
        </div>
    );
};

export default AdditionItem;
