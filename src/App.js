import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryPost from './Components/AddEntry/AddEntryPost';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{name: 'Colleen Stewart', post: 'This is my second post!'}])

  function addNewEntry(entry){
    let tempNewEntryPost = [entry, ...entries];
    setEntries(tempNewEntryPost);
  }

  return (
    <div className='container-fluid'>
      <h3 style={{margin: '1em'}}>Social
      <small className= 'text-muted'>Feed</small></h3>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box shadow p-3 mb-5 bg-white rounded'>
            <AddEntryPost addNewEntryProperty={addNewEntry}/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box shadow p-3 mb-5 bg-white rounded'>
            <DisplayEntries parentEntries = {entries}/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
