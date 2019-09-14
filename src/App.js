import React, { useState } from 'react';
import './App.css';
import firebase from 'firebase'
import { storage } from './firebase-config'

function App() {

  console.log("storage", storage);

  const [filename, setFilename] = useState('')

 const handleImageUpload = e => {
    e.preventDefault();
    console.log("fileselected triggered", e.target.files[0]);
    var file = e.target.files[0];

    //Create a storage ref
    var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

    //Upload file
    var task = storageRef.put(file);

    //Update progress bar
    task.on('state_changed', 
        
    // function progress(snapshot) {
    //     var percentage = (snapshot.bytesTransferred /
    //     snapshot.totalBytes ) * 100;
    //     uploader.value = percentage;
    // },

    function error(err) {
        console.log("error uploading file", err);
    },

    function complete() {
        console.log("upload complete");
    }
  );       

  }
  return (
    <div className="App">
      <input type="file" onChange={handleImageUpload}/>
    </div>
  );
}

export default App;
