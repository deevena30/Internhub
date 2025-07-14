import React from 'react';

const ForumThread = ({ title, author, upvotes, onClick, forumImg }) => (
  <div onClick={onClick} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16 }}>
    {forumImg && (
      <img src={forumImg} alt="forum" style={{ width: 48, height: 48, objectFit: 'contain', marginRight: 16 }} />
    )}
    <div>
      <div style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#555' }}>By {author} | Upvotes: {upvotes}</div>
    </div>
  </div>
);

export default ForumThread; 