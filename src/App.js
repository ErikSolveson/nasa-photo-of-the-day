import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Description from "./components/Description";
// this import is for when the media_type was video, but I'm still not sure how to make an if statment of that with a promise
// import Video from "./components/Video";
import Photo from "./components/Photo";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=NIosVCHUoNvb39y7rO6OujB74GcUd0nNuF5pZ1xU
    `
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      {data && <Description description={data.explanation} />}
      {/* {data.media_type === "video" && <Video src={data.url} />} */}
      {data && <Photo src={data.url} />}
    </div>
  );
}

export default App;
