import { useState } from "react";
import { Play } from "react-feather";
import YouTube from "react-youtube";

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {!play ? (
        <div className="relative text-center ">
          <button className="video-play-btn" onClick={() => setPlay(true)}>
            <Play />
          </button>
          <img
            width={width}
            height={height}
            src={src}
            alt={title}
            className="inline h-auto max-w-full rounded-3xl aspect-video"
          />
        </div>
      ) : (
        <div className="youtube mx-auto text-center aspect-video bg-gray-200 rounded-3xl">
          <YouTube
            videoId={video_id}
            opts={videoOptions}
            iframeClassName={`aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-3xl`}
          />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
