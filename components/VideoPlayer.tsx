"use client";
import React, { useEffect, useRef, useState } from "react";
import thumbnail from "@/assets/video-thumbnail.webp";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isControlOpen, setController] = useState(false);
  const [displayBtn, setDisplayBtn] = useState(true);

  const videoHandler = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
      setDisplayBtn(false);
      setController(true);
    }
  };

  useEffect(() => {
    videoRef.current?.addEventListener("pause", () => {
      setDisplayBtn(true);
    });
    videoRef.current?.addEventListener("play", () => {
      setDisplayBtn(false);
    });
  }, []);

  return (
    <div className="aspect-video w-full max-w-[1200px] relative px-14 tablet:px-8 semiLg-mob:px-6">
      <video
        ref={videoRef}
        className="rounded-2xl"
        src="https://djdzgru0o5eey.cloudfront.net/test.mp4"
        typeof="video/mp4"
        poster={thumbnail.src}
        playsInline
        controls={isControlOpen}
      />

      {displayBtn && (
        <button
          title="play video"
          onClick={videoHandler}
          className="w-10 md:w-16 aspect-square rounded-full bg-white outline-4 md:outline-8 outline outline-[#C28840] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <span
            className="border-transparent border-l-[#C28840] border-t-[8px] border-b-[8px] border-l-[12px] md:border-t-[14px] md:border-b-[14px] md:border-l-[24px]"
            style={{
              position: "absolute",
              left: "55%",
              top: "50%",
              transform: `translateX(-45%) translateY(-50%)`,
              zIndex: "10",
              width: "0",
              height: "0",
            }}
          />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
