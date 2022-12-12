import React , {useState , useEffect} from "react";
import POSTS from "../Product/PRODUCTS.json";
import Button from "../Button/Button";

const Api = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const loadPosts = async () => {
        setLoading(true)
        const responsePosts = await fetch('http://www.mocky.io/v2/5e9278be3100005b00462cbd');
        const posts = await responsePosts.json()
        await setPosts(posts);
        setLoading(false);
    };
    //start at load page
    useEffect(() =>{
        console.log("start upppppppppppppppppppp");
        loadPosts();
    } , [])
    //change state for loaded verify
    useEffect(() =>{
        console.log("change state for loaded verify");
        console.log(loaded);
    } , [loaded])

    return(
        <div>
            {loading ? 'Loading' : 'Load posts into state'}
            {posts.length === 0 && <div>no posts</div>};
            {posts.length > 0 && (
                <ul className="bd">
                    {posts.map((item) =>
                        <li>
                            <h3>{item.name}</h3>
                            <img src={item.image}/>
                            <span>Price : {item.title}</span>
                            <span>Price : {item.content}</span>
                            <button>add to card</button>
                        </li>
                    )}
                </ul>
            )};
        </div>
    )
}

export default Api;