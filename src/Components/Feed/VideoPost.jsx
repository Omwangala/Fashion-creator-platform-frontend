import React from 'react';
import MediaContent from './MediaContent';

const VideoPost = ({ post }) => {
  return (
    <section className="post">
      <MediaContent post={post} />
      
      <div className="post-overlay">
        <div className="post-description">
          <h3 style={{ 
            fontFamily: 'var(--font-main)', 
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontSize: '1rem'
          }}>
            @{post.username}
          </h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{post.caption}</p>
        </div>
        
        <div className="post-actions">
          <button className="action-btn">VAULT</button>
          <button className="action-btn">SHARE</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPost;