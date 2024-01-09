
import LikeImage from './LikeImage';
import LikePost from './LikePost';

function Parentsome() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default Parentsome;