
import LikeImage from './LikeImage';
import LikePost from './LikePost';

function Parentsome() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikeImage/>
        <LikePost/>
      </div>
    </div>
  );
}

export default Parentsome;