import React from "react";
import "./Product.css"

const Product = (props) => {
    console.log(props);
    //const {data} = props;
    return (
        <ul className="bd">
            {props.dataProb.map((item) =>
                <li>
                    <h3>{item.name}</h3>
                    <img src={item.image}/>
                    <span>Price : {item.price}</span>
                    <button>add to card</button>
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
