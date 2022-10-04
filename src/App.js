import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{name: 'Colleen Stewart', post: 'This is my first post!'}])

  return (
    <div className="App">
      <h3 style={{margin: '1em'}}>Social
      <small className= 'text-muted'>Feed</small></h3>
        <table>
          <tbody>
            <tr>
              <td>colleen</td>
            </tr>
            <tr>
              <td>first post</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
