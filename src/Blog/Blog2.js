import React , {useState , useEffect} from "react";
import POSTS from "../Product/PRODUCTS.json";
import Button from "../Button/Button";

const Blog = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const handleLoadPost = () =>{
        setLoading(true);
        setLoaded(true);
        setTimeout(()=>{
            setPosts(POSTS);
            setLoading(false);
            setLoaded(false);
        } , 1000);
    }
    //start at load page
    useEffect(() =>{
        console.log("start upppppppppppppppppppp");
        handleLoadPost();
    } , [])
    //change state for loaded verify
    useEffect(() =>{
        console.log("change state for loaded verify");
        console.log(loaded);
    } , [loaded])

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