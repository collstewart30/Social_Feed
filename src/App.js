import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

  const [entries, setEntries] = useState([{name: 'Colleen Stewart', post: 'This is my second post!'}])

  return (
    <div className="App">
      <h3 style={{margin: '1em'}}>Social
      <small className= 'text-muted'>Feed</small></h3>
      <div>
        <DisplayEntries parentEntries = {entries}/>   
      </div>
    </div>
  );
}

export default App;
