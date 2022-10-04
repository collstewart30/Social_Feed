import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryPost from './Components/AddEntry/AddEntryPost';


function App() {

  const [entries, setEntries] = useState([{name: 'Colleen Stewart', post: 'This is my second post!'}])

  function addNewEntry(entry){
    let tempNewEntryPost = [entry, ...entries];
    setEntries(tempNewEntryPost);
  }

  return (
    <div className="App">
      <h3 style={{margin: '1em'}}>Social
      <small className= 'text-muted'>Feed</small></h3>
      <div>
        <AddEntryPost addNewEntryProperty={addNewEntry}/>
        <DisplayEntries parentEntries = {entries}/>   
      </div>
    </div>
  );
}

export default App;
