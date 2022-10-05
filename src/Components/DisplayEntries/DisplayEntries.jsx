import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.jsx';


const DisplayEntries = (props) => {

    return (     
      <div>
       {/* <table className='table'> */}
          {/* <tbody> */}
            {props.parentEntries.map((entry) => {
              return (
                <table className='table' >
                <tbody>
                <div>
                  <tr>
                    <td>{entry.name}</td>
                  </tr>
                  <tr>
                    <td>{entry.post}</td>
                    <CustomButton messageOne='Like' messageTwo="Dislike"/>
                  </tr>
                    
                </div>
                </tbody>
                <hr></hr>
                </table>
                
              );
            })}
          {/* </tbody> */}
        {/* </table>   */}
      </div>  
      
    );
}
 
export default DisplayEntries;