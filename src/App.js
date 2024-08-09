import logo from './logo.svg';
import './App.css';

import RightScroller from './Components/LeftScroller/RightScroller';
import LeftScroller from './Components/RightScroller/LeftScroller';

function App() {
  return (
    <div className='w-full h-screen bg-[url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Amazing-HD-Black-Wallpapers.jpg)] bg-no-repeat bg-cover flex'>
      {/* <RightScroller/> */}
      <LeftScroller/>
    </div>
  );
}

export default App;
