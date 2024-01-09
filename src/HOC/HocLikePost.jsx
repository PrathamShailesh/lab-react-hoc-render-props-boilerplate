import React from 'react';
import withLikeCounter from './withLikeCounter';

function HocLikePost({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(HocLikePost);
