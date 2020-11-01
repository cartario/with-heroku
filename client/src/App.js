import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(""); 
  const [data2, setData2] = useState(""); 
  const [form, setForm] = useState(""); 

  const handleChange = (e) => {
    setForm(e.target.value)
  }

  const handleSubmit = () => {
    axios.post("https://v-201189-simple-chat.herokuapp.com/hello", {message: form}).then((res)=>setData2(res.data.db));
  }

  useEffect(()=> {
    fetch("https://v-201189-simple-chat.herokuapp.com/hello").then((res)=>res.json()).then((json)=>setData(json));
    
  }, [])

  return (
    <div className="App">
      <p>get request:</p>
      {!!data.message ? data.message : ""}
      <br/>
      <input 
        value={form}
        onChange ={handleChange}
      />
      <button onClick = {handleSubmit}>Send</button>
      <p>post request:</p>
      {!!data2 && data2.map((item)=><p>{item}</p>)}
    </div>
  );
}

export default App;
