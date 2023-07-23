import { useNavigate } from 'react-router-dom';
import classes from './blog-card.module.css';

const BlogCard = ({ image, title, subtitle, link, postId }) => {
    const navigate = useNavigate();

    const postDetailHandler = () => {
        if (postId) {
            navigate(`${postId}`);
        }
    };

    return (
        <div className={classes.card} onClick={postDetailHandler}>
            <div className={classes['card__image']}>
                <img src={image} alt={subtitle} width='auto' height='auto' />
            </div>
            <div className={classes['card__body']}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default BlogCard;
