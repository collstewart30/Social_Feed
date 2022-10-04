import React, { useState } from 'react';


const AddEntryPost = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntryPost = {
            name: name,
            post: post
        };
        console.log(newEntryPost);
        props.addNewEntryProperty(newEntryPost)
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type = 'text' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type = 'text' value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Execute</button>
        </form>
     );
}
 
export default AddEntryPost;