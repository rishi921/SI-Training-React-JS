import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayAPIDemo = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10)))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ backgroundColor: "aquamarine" }} className="container mt-5">
            <h1 style={{ color: "red" }} className="text-center m-2 p-2">POSTS</h1>
            <div className="row">
                {posts.map(post => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div style={{ backgroundColor: 'blanchedalmond' }} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAPIDemo;