"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="aspect-video w-full max-w-[1200px] relative">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://djdzgru0o5eey.cloudfront.net/test.mp4"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        style={{position: "absolute", inset: "0"}}
      />
      <source
        src="https://djdzgru0o5eey.cloudfront.net/test.mp4"
        type="video/mp4"
      />
    </div>
  );
};

export default VideoPlayer;
