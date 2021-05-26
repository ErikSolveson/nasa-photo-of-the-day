import React,{useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Description from './components/Description'
import Video from "./components/Video";

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=NIosVCHUoNvb39y7rO6OujB74GcUd0nNuF5pZ1xU
    `)
    .then((response) =>
    
    {
      console.log(response.data)
      setData(response.data)})
  },[])

  return (
    <div className="App">
     {data && <Description description={data.explanation}/>}
     {data && <Video src={data.url}/>}
    </div>
  );
}

export default App;
