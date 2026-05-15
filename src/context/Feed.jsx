import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VideoPost from '../components/Feed/VideoPost';
import UploadModal from '../components/Upload/UploadModal';
import { usePosts } from '../hooks/usePosts';

const Feed = () => {
  const { posts, setPosts, loading, error } = usePosts(); // Expose setPosts in your hook
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real-time Optimization: Instant array integration
  const handleUploadSuccess = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  if (loading) return <div className="auth-page"><p className="nav-logo">ACCESSING VAULT...</p></div>;
  if (error) return <div className="auth-page"><p style={{ color: 'var(--error-pulse)' }}>{error}</p></div>;

  return (
    <div className="app-container">
      <Navbar />
      
      {/* Dynamic action button to trigger glass modal */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="upload-btn"
        style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 1500, letterSpacing: '2px', fontFamily: 'var(--font-main)' }}
      >
        + ADD CREATION
      </button>

      <UploadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onUploadSuccess={handleUploadSuccess} 
      />

      {posts.map((post) => (
        <VideoPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;