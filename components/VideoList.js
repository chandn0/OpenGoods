import React from "react";

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      <h2>Videos to Watch</h2>
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title={`Video ${index + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
