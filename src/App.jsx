import './App.css';
import Parentsome from './components/Parentsome';
import HocLikeImage from './HOC/HocLikeImage';
import HocLikePost from './HOC/HocLikePost';
import Parent from './HOC/Parent';



function App() {
  return (
    <div>
        <Parentsome/>
        {/* <HocLikeImage/>
        <HocLikePost/> */}
        <Parent/>
   
    </div>
  );
}

export default App;
