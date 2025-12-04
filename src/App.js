import logo from './ok-cat.gif';
import { useState } from 'react';

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
        <h1> I <code>dare</code> you click one this. </h1>
        <button onClick={() => setShowImage(!showImage)}>
        </button>
        {showImage && (
          <div>
            <img src={logo} alt="the coolest cat" width="500"></img>
          </div>
        )}
        <h1>And it's my first one! </h1>
    </div>
  );
}
export default App;
