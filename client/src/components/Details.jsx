import React from 'react';
import parse from '../parse.js';

function Details({ storyInfo, setToggle, toggle }) {

  const handleVote = async (vote) => {
    let data = {
      id: storyInfo.id,
      vote: vote,
    };
    await parse
      .put('/sin/vote', data)
      .then((res) => {
        console.log('vote received', res)
        setToggle(!toggle);
      })
      .catch((err) => {
        console.log('Details vote error');
      })
  }

  return (
    <div id="Details">
      <div className="leftDetail">
        <h2>{storyInfo.story_name}</h2>
        <h4>By: {storyInfo.writer_name}</h4>
      </div>
      <div className="flagMenuContainer">
        <div>

        </div>
      </div>
      <div className="rightDetail">
        <div className="voteContainer">
          <h4>Score: {storyInfo.score}</h4>
          <div className="vote">
            <button
              className="voteBtn btn"
              onClick={(e) => {
                e.preventDefault();
                handleVote(1);
              }}
            >like</button>
            <button
              className="voteBtn btn"
              onClick={(e) => {
                e.preventDefault();
                handleVote(-1);
              }}
            >dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;