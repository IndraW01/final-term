import React, { useState, useEffect } from 'react';
import VideoThumbnail from './components/VideoThumbnail';
import ProductItem from './components/ProductItem';
import Comment from './components/Comment';
import axios from 'axios';

function App() {
  const [thumbnails, setThumbnails] = useState([]);
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch data from Express API
    const fetchVideoData = async () => {
      try {
        const thumbnailsResponse = await axios.get('/video-thumbnails');
        const productsResponse = await axios.get('/products/video-id-here'); // Replace with actual video ID
        const commentsResponse = await axios.get('/comments/video-id-here'); // Replace with actual video ID

        setThumbnails(thumbnailsResponse.data);
        setProducts(productsResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Video App</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Render Video Thumbnails */}
        {thumbnails.map((thumbnail, index) => (
          <VideoThumbnail key={index} imageUrl={thumbnail.imageUrl} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Render Product Items */}
          {products.map((product, index) => (
            <ProductItem
              key={index}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div>
          {/* Render Comments */}
          {comments.map((comment, index) => (
            <Comment
              key={index}
              username={comment.username}
              comment={comment.comment}
              timestamp={comment.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
