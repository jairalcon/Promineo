import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
// ! npx json-server -p 3500 -w data/db.json
// https://www.npmjs.com/package/react-use

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage />} />
          </Route>
          <Route path='edit/:id' element={<EditPost />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

// !Not using because of customHook
// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       const response = await api.get('/posts');
//       setPosts(response.data);
//     } catch(err) {
//       if (err.response) {
//       // Not in the 200 response range
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//       } else {
//         console.log(`Error: ${err.message}`);
//       }
//     }
//   }

//   fetchPosts();
// }, [])

// const [posts, setPosts] = useState([])
// const [search, setSearch] = useState('');
// const [searchResults, setSearchResults] = useState([]);
// const [postTitle, setPostTitle] = useState('');
// const [postBody, setPostBody] = useState('');
// const [editTitle, setEditTitle] = useState('');
// const [editBody, setEditBody] = useState('');
// const navigate = useNavigate();
// const { width } = useWindowSize();

// const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

// useEffect(() => {
//   setPosts(data);
// }, [data])

// useEffect(() => {
//   const filteredResults = posts.filter(post =>
//     ((post.body).toLowerCase()).includes(search.toLocaleLowerCase())
//     || ((post.title).toLowerCase()).includes(search.toLocaleLowerCase()));

//   setSearchResults(filteredResults.reverse());
// }, [posts, search])

// // using axios to Edit
// const handleEdit = async (id) => {
//   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//   const updatedPost = { id, title: editTitle, datetime, body: editBody };
//   try {
//     const response = await api.put(`/posts/${id}`, updatedPost);
//     setPosts(posts.map(post => post.id === id ? { ...response.data} : post));
//     setEditTitle('');
//     setEditBody('');
//     navigate('/');
//   } catch(err) {
//     console.log(`Error: ${err.message}`)
//   }
// }

// // delete with axios
// const handleDelete = async (id) => {
//   try {
//     await api.delete(`/posts/${id}`);
//     const postsList = posts.filter(post => post.id !== id);
//     setPosts(postsList);
//     navigate('/');
//   } catch(err) {
//     console.log(`Error: ${err.message}`)
//   }
// }

// // using axios to post
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//   const newPost = { id, title: postTitle, datetime, body: postBody };
//   try {
//     const response = await api.post('/posts', newPost)
//     const allPosts = [...posts, response.data];
//     setPosts(allPosts);
//     setPostTitle('');
//     setPostBody('');
//     navigate('/');
//   } catch(err) {
//     console.log(`Error: ${err.message}`);
//   }
// }

export default App;
