import React from 'react';

const Comment = ({ username, comment, timestamp }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <p className="text-gray-600">{username}</p>
      <p>{comment}</p>
      <p className="text-gray-400">{new Date(timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Comment;
