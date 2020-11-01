import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState("");  

  useEffect(()=> {
    fetch("/hello").then((res)=>res.json()).then((json)=>setData(json));
    
  }, [])

  return (
    <div className="App">
      {!!data.message ? data.message : ""}
    </div>
  );
}

export default App;
