import React, { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const MediaContent = ({ post }) => {
  const videoRef = useRef(null);
  const isVisible = useIntersectionObserver(videoRef);

  useEffect(() => {
    if (post.mediaType === 'video' && videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, post.mediaType]);

  if (post.mediaType === 'video') {
    return (
      <video
        ref={videoRef}
        className={`post-video ${isVisible ? 'is-loaded' : ''}`}
        src={post.mediaUrl}
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <img 
      className="post-video is-loaded" 
      src={post.mediaUrl} 
      alt={post.caption} 
      style={{ objectFit: 'cover' }}
    />
  );
};

export default MediaContent;