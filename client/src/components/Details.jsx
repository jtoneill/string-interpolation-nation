import React from 'react';

function Details({ storyInfo }) {

  return (
    <div id="Details">
      <div className="leftDetail">
        <h2>{storyInfo.story_name}</h2>
        <h4>By: {storyInfo.writer_name}</h4>
      </div>
      <div className="rightDetail">

      </div>
    </div>
  );
}

export default Details;