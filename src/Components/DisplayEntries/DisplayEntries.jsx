import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.jsx';


const DisplayEntries = (props) => {

    return (     
      <div>
        {props.parentEntries.map((entry) => {
          return (
            <table className='table' >
              <tbody>
                <div>
                  <tr className='row'>
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
      </div>        
    );
}
 
export default DisplayEntries;