import './DisplayEntry.css';


const DisplayEntries = (props) => {
    return (       
      <table className='table form-control'>
          <tbody>
            {props.parentEntries.map((entry) => {
              return (
                <div>
                  <tr>
                    <td>{entry.name}</td>
                  </tr>
                  <tr>
                    <td>{entry.post}</td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table> 
    );
}
 
export default DisplayEntries;