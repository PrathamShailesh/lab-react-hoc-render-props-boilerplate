import './App.css';
import Parentsome from './components/Parentsome';
import Parent from './HOC/Parent';
import ParentRender from './RenderProps/ParentRender';



function App() {
  return (
    <div className='all'>
        <Parentsome/>

        <Parent/> 

        <ParentRender/>


   
    </div>
  );
}

export default App;
