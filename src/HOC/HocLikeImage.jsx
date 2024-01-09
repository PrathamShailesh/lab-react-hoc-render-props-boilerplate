import React from 'react';
import withLikeCounter from './withLikeCounter';

function HocLikeImage({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(HocLikeImage);