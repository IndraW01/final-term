import React from 'react';

const VideoThumbnail = ({ imageUrl }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <img src={imageUrl} alt="Thumbnail" className="w-full h-auto" />
    </div>
  );
};

export default VideoThumbnail;