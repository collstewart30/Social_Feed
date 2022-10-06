import './CustomButton.css';
import React, { useState } from 'react';


const CustomButton = (props) => {
    
    const [likeButtonClass, setLikeButtonClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');
    
    /*handleClick event listener*/
    function handleClickLike(){
        if(likeButtonClass === 'inactive'){
            setLikeButtonClass('active');   
            setDislikeButtonClass('inactive')         
        }
        else{
            setLikeButtonClass('inactive');
        }
    }

    function handleClickDislike(){
        if(dislikeButtonClass === 'inactive'){
            setDislikeButtonClass('active');   
            setLikeButtonClass('inactive')         
        }
        else{
            setDislikeButtonClass('inactive');
        }
    }
        return (
            <div>
                <button className={likeButtonClass} onClick={handleClickLike} style={{'margin': '.5em'}} color='red'>{props.messageOne}</button>
                <button className={dislikeButtonClass} onClick={handleClickDislike} style={{'margin': '.5em'}}>{props.messageTwo}</button>
            </div>
        )
}

export default CustomButton