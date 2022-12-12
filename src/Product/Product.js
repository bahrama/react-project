import React , {useContext , useState , useReducer} from "react";
import "./Product.css"
import ThemeContext from "../contexts/ThemeContext";
import { AiFillAlert , AiFillBank } from "react-icons/ai";
import ProductItemTypeReducer from "./ProductItemTypeReducer";


const Product = (props) => {
    const [added , setAdded] = useState(false);
    const [state , dispatch] = useReducer(ProductItemTypeReducer , {
        added : false
    });
    console.log(props);
    //const {data} = props;
    const themeValue = useContext(ThemeContext);
    console.log('themeContext' , themeValue);
/*    const handleAdd = () => {
        setAdded(!added);
    }*/
    const handleAdd = () => {
        if(state.added){
            dispatch({
                type :"REMOVE_FROM_CARD"
            })
        }else{
            dispatch({
                type :"ADD_TO_CARD"
            })
        }
    }
    return (
        <ul className="bd">
            {props.dataProb.map((item) =>
                <li>
                    <h3>{item.name}</h3>
                    <img src={item.image}/>
                    <span>Price : {item.price}</span>
                    <button onClick={handleAdd} style={{
                        color : "white" ,
                        borderColor : themeValue.rang.color ,
                        backgroundColor : themeValue.rang.color
                    }}>

                        {
                            state.added ?
                                (<div>remove <AiFillAlert/></div>)
                                :
                                (<React.Fragment> {/* div not rendered so <></>*/}
                                    add <AiFillBank/>
                                </React.Fragment>)

                        }

                    </button>
                </li>
            )}
        </ul>
    )
}

/*const Product = ({dataProb}) => {
    return (
        <ul className="bd">
            {dataProb.map((item) =>
                <li>
                    <h3>{item.name}</h3>
                    <img src={item.image}/>
                    <span>Price : {item.price}</span>
                    <button>add to card</button>
                </li>
            )}
        </ul>
    )
}*/
export default Product
