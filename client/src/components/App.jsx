import React, { useState } from 'react';
import List from './List.jsx';
import StoryContainer from './StoryContainer.jsx';

function App() {
  const [storyId, setStoryId] = useState(1);

  return (
    <div id="App">
      <header>String Interpolation Nation</header>
      <div id="Page">
        <List setStoryId={setStoryId} />
        <StoryContainer storyId={storyId} />
      </div>
      <footer>feeter</footer>
    </div>
  );
}

export default App;