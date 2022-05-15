import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SimpleDropZone from './components/DropZoneComponent';
import { useState } from 'react';

function App() {

  const [fiile, setFile] = useState("")
  const [baase64, setBase64] = useState("")


  const handleChange = (selectorFiles)=>{
    console.log(selectorFiles[0].name,"sele");
    let file = selectorFiles[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFile(file)
      setBase64(reader.result)
      // this.handleSubmit()
    };

    console.log(fiile,baase64)
  }


  const uploadImage = (e)=>{
    e.preventDefault()
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'image/jpg' , "Access-Control-Allow-Origin": "*"},
  //     body: baase64
  // };
  //   fetch('https://281ku6845d.execute-api.eu-west-2.amazonaws.com/v1/test2', requestOptions, )//{mode: 'cors'}
  //       .then(response => response.json())
  //       .then(data => console.log(data));
        // .then(data => this.setState({ postId: data.id }));
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://281ku6845d.execute-api.eu-west-2.amazonaws.com/v1/test2'
    axios.post(proxyurl+url, fiile, {
      headers: {
        'content-type': 'image/jpeg'
      }
  }).then(response =>{
      console.log(response,"Done")
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <form onSubmit={uploadImage}>
      {/* <form method="POST" action={uploadImage}> */}
            <input type="file" onChange={ (e) => handleChange(e.target.files) }/>
            <button type="submit">Submit</button>
            
        </form>
       
    </div>
  )
  }
export default App
