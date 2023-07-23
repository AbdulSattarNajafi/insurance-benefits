import { useParams } from 'react-router-dom';
import PostDetail from '../components/Blog/post-detail';

const BlogPost = () => {
    const { postId } = useParams();

    return (
        <>
            <PostDetail postId={postId} />
        </>
    );
};

export default BlogPost;
