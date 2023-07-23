import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../constant';
import classes from './post-detail.module.css';

const PostDetail = ({ postId }) => {
    const navigate = useNavigate();
    const gotToBlogPage = () => navigate('/blog', { replace: true });

    const post = blogPosts.find((item) => item.id === postId);

    return (
        <section className={classes.post}>
            <div className={classes['post-container']}>
                {post ? (
                    <div className={classes['post__card']}>
                        <div className={classes['post__card-image']}>
                            <img src={post.image} alt={post.title} width='auto' height='auto' />
                        </div>
                        <div className={classes['post__card-body']}>
                            <h4>{post.date}</h4>
                            <h3>{post.title}</h3>
                            <p className={classes['post__card-caption']}>{post.caption}</p>

                            <h5>{post.subtitle}</h5>
                            <p>{post.description}</p>

                            {post.details.map((detail, index) => {
                                return (
                                    <div key={index}>
                                        <h5>{detail.title}</h5>
                                        {detail.article.map((text, i) => {
                                            return <p key={i}>{text}</p>;
                                        })}
                                    </div>
                                );
                            })}
                            <a href={post.link}>
                                <p>{post.link}</p>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className={classes['post__error']}>
                        <h2 className='text-blue'>Blog Post not Found</h2>
                        <p>
                            The blog post you are looking for might have been removed, had it's name
                            changed or is temporary unavailable.
                        </p>
                        <button type='button' onClick={gotToBlogPage}>
                            Go to Blog page
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PostDetail;
