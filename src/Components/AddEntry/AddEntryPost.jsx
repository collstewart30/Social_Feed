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
        props.addNewEntryProperty(newEntryPost);
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type = 'text' value={name} className='form-control' onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type = 'text' value={post} className='form-control' onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
        </form>
     );
}
 
export default AddEntryPost;