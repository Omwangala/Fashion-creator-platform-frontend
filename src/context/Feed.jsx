import React from 'react';
import Navbar from '../components/Navbar';
import VideoPost from '../components/Feed/VideoPost';
import { usePosts } from '../hooks/usePosts';

const Feed = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return (
    <div className="auth-page">
      <span className="nav-logo" style={{ letterSpacing: '10px' }}>VOGUE VAULT</span>
    </div>
  );

  return (
    <div className="app-container">
      <Navbar />
      {posts.map((post) => (
        <VideoPost key={post.id} post={post} />
      ))}
      
      {posts.length === 0 && !loading && (
        <div className="post">
          <p className="text-secondary">THE VAULT IS EMPTY</p>
        </div>
      )}
    </div>
  );
};

export default Feed;