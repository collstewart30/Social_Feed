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
                <button className={likeButtonClass} onClick={handleClickLike}>{props.messageOne}</button>
                <button className={dislikeButtonClass} onClick={handleClickDislike}>{props.messageTwo}</button>
            </div>
        )
}

export default CustomButton