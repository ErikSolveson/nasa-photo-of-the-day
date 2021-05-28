import React from "react";
import ReactPlayer from "react-player";

function Video(props) {
  const { src } = props;

  return (
    <div>
      <ReactPlayer url={src} />
    </div>
  );
}

export default Video;
