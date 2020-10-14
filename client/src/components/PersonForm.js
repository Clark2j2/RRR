import React, { useState } from 'react';
import axios from 'axios';
export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const {title, price, description, setTitle, setPrice, setDescription} = props.items;
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    console.log(props);     
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(title, price, description);
        onSubmitProp({title, price, description});
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Add a product!</h1>
            <p>
                <label>Title</label>
                <input type="text" defaultValue={initialTitle} onChange={e=> setTitle(e.target.value)} />
            </p>
            <p>
            <label>Price</label>
                <input type="text" defaultValue={initialPrice} onChange={e=>setPrice(e.target.value)} />
            </p>
            <p>
            <label>Description</label>
                <input type="text" defaultValue={initialDescription} onChange={e=>setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}