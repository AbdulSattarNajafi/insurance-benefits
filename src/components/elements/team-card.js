import classes from './team-card.module.css';

const TeamCard = ({ image, name, description, experience, almamater }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <div className={classes['card__image-wrapper']}>
                    <img src={image} alt={name} width='auto' height='auto' />
                </div>
            </div>
            <div className={classes['card__body']}>
                <h5>{name}</h5>
                <p>{description}</p>
                <p>Teaching Experience: {experience}</p>
                <p>Alma mater: {almamater}</p>
            </div>
        </div>
    );
};

export default TeamCard;
