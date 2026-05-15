import React, { useState } from 'react';
import { postService } from '../../services/postService';

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('File', file);
    formData.append('Caption', caption); // Matches PostCreationRequest.Caption

    try {
      setIsUploading(true);
      
      // Hits POST api/posts implicitly
      const newPost = await postService.createPost(formData); 
      
      // Feed updates instantly with backend data
      onUploadSuccess(newPost); 
      onClose();
      setFile(null);
      setCaption('');
    } catch (err) {
      console.error("The Vault rejected this archival transfer:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="auth-page" style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(8, 9, 10, 0.95)' }}>
      <div className="glass-pillar">
        <div className="auth-header">
          <h1 style={{ letterSpacing: '6px' }}>ARCHIVE</h1>
          <p>CONTRIBUTE NEW MEDIA TO THE VAULT</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ marginBottom: '25px' }}>
            <input 
              type="file" 
              accept="video/*,image/*" 
              onChange={(e) => setFile(e.target.files[0])} 
              required 
              style={{ color: 'var(--text-secondary)' }}
            />
          </div>

          <div className="input-group">
            <input 
              type="text" 
              placeholder=" " 
              value={caption} 
              onChange={(e) => setCaption(e.target.value)} 
              required 
            />
            <label>DESCRIPTION / CAPTION</label>
          </div>

          <button type="submit" disabled={isUploading}>
            {isUploading ? 'ARCHIVING...' : 'PUBLISH TO VAULT'}
          </button>
          
          <button 
            type="button" 
            onClick={onClose} 
            style={{ background: 'none', border: 'none', marginTop: '15px', color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'var(--font-main)' }}
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;