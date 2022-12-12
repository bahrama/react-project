import React , {useState} from "react";
import POSTS from "../Product/PRODUCTS.json";
import Button from "../Button/Button";

const Blog = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState('');

    const handleLoadPost = () =>{
        setLoading(true);
        setTimeout(()=>{
            setPosts(POSTS);
            setLoading(false);
        } , 1000);
    }
    return(
        <div>
     <Button customClick = {handleLoadPost}>
         {loading ? 'Loading' : 'Load posts into state'}
     </Button>
    {posts.length === 0 && <div>no posts</div>};
            {posts.length > 0 && (
                <ul className="bd">
                    {posts.map((item) =>
                        <li>
                            <h3>{item.name}</h3>
                            <img src={item.image}/>
                            <span>Price : {item.price}</span>
                            <button>add to card</button>
                        </li>
                    )}
                </ul>
            )};
        </div>
    )
}

export default Blog;