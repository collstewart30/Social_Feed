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
        props.addNewEntryProperty(newEntryPost);
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group form-inline'>
                <label>Name</label>
                <input type = 'text' value={name} className='form-control' onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='form-group form-inline'>
                <label style={{'margin-top': '1em'}}>Post</label>
                <input type = 'text' value={post} className='form-control' style={{'height': '100px'}} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <div className='form-group align-right'>
                <button type='submit' style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
     );
}
 
export default AddEntryPost;