import React, {useState} from "react";
import Button from "../Button/Button";
const Contact = () =>{
    //hooks                     //////default
    const [family,setFamily] = useState('');
    const [description,setDescription] = useState('');
    const [email,setEmail] = useState('');
    const [errors,setErrors] = useState('');
    const handleEvent = (event) =>{
        console.log(event.target.value);
    };
    const handleFamily = (event) =>{
        setFamily(event.target.value);
    }
    const handleDescription = (event) =>{
        setDescription(event.target.value);
    }
    //validation
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleEmail = (event) =>{
        if(isValidEmail(event.target.value))
        {
            setEmail(event.target.value);
            setErrors({
                ...errors ,
                email : null
            })
        }
        else {
            setErrors({
                ...errors ,
                email : "is not valid"
            })
        }
    }
    const handleClick = () =>{
        console.log("family" , family);
        console.log("Description" , description);
        console.log("email" , email);

    }


    return(
        <div className="con">
{/*            <div className="elem">
                <input onChange={()=>{
                    console.log("saaaaaaaaaaaaaa");
                }} onKeyUp={(event) =>{
                    console.log(event.target.value)
                }} type="text" placeholder="name"/>
            </div>*/}
            <div className="elem">
                <input onChange={handleEvent} type="text" placeholder="name"/>
            </div>
            <div className="elem">
                <input onChange={handleFamily} type="text" placeholder="family"/>
            </div>
            <div className="elem">
                <input onChange={handleEmail} type="text" placeholder="email"/>
                <span>{errors.email}</span>
            </div>
            <div className="elem">
                <textarea onChange={handleDescription} name="description">salam salam</textarea>
            </div>
            <div className="elem">
                <Button customClick = {handleClick}>AAAAAAAAAAAAAAAAAAAAAAAA</Button>
            </div>
        </div>
    )
}

export default Contact;