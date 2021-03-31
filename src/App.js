import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Explanation from "./components/Explanation";
import Photo from "./components/Photo";

function App() {
  const [data, setData] = useState("loading...");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(function (response) {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Photo photo={data.hdurl} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
