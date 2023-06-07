import React, { useState } from 'react';
import List from './List.jsx';
import StoryContainer from './StoryContainer.jsx';

function App() {
  const [storyId, setStoryId] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <div id="App">
      <header>String Interpolation Nation</header>
      <div id="Page">
        <List setStoryId={setStoryId} toggle={toggle} setToggle={setToggle} />
        <StoryContainer storyId={storyId} toggle={toggle} setToggle={setToggle} />
      </div>
      <footer>feeter</footer>
    </div>
  );
}

export default App;