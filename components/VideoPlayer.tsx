"use client";
import React from "react";
import ReactPlayer from "react-player";


const VideoPlayer = () => {

  return (
    <div>
      <ReactPlayer
        width="1080px"
        height="610px"
        url="https://djdzgru0o5eey.cloudfront.net/test.mp4"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src="https://djdzgru0o5eey.cloudfront.net/test.mp4" type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
