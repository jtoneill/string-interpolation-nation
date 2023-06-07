import React, { useState, useEffect } from 'react';
import parse from '../parse';
import Story from './Story.jsx';
import Details from './Details.jsx';

function StoryContainer({ storyId, setToggle, toggle }) {
  const [storyInfo, setStoryInfo] = useState({});

  useEffect(() => {
    parse
      .get(`/sin/story/${storyId}`)
      .then((res) => {
        console.log('story res', res);
        setStoryInfo(res[0]);
      })
  }, [storyId, toggle]);

  return (
    <div id="StoryContainer">
      <Details storyInfo={storyInfo} setToggle={setToggle} toggle={toggle} />
      <Story storyInfo={storyInfo} />
    </div>
  );
}

export default StoryContainer;