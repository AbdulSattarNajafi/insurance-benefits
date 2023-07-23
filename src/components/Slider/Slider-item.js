import classes from './Slider-item.module.css';

const SliderItem = ({ label, title, text, image }) => {
    return (
        <div className={classes.slide}>
            <div className={classes['slide__text']}>
                <div className={classes['slide__text-title']}>
                    <div className={classes['slide__text-label']}>{label}</div>
                    <h3>{title}</h3>
                </div>
                <p>{text}</p>
            </div>
            <div className={classes['slide__image']}>
                <img src={image} width='auto' height='auto' alt={title} />
            </div>
            <div className={classes['slide__placeholder']}></div>
        </div>
    );
};

export default SliderItem;
