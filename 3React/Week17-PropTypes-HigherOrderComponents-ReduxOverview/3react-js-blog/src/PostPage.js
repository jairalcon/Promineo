import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api/posts';
import DataContext from './context/DataContext';

const PostPage = () => {
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => (post.id).toString() === id);

    // delete with axios
    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter(post => post.id !== id);
            setPosts(postsList);
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    } 

    return (
        <main className='PostPage'>
            <article className='post'>
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className='btn btn-warning'>Edit Post</button></Link>
                        <button className='btn btn-danger' onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Out Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage;