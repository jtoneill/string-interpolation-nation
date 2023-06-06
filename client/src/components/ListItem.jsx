import React from 'react';

function ListItem({ id, storyName, writerName, score, setStoryId }) {

  return (
    <div
      className="listItem"
      onClick={(e) => {
        e.preventDefault();
        console.log('this is e', e);
        setStoryId(id);
      }}
    >
      <div className="listItemText">
        <div className="title">
          -{storyName}-
        </div>
        <div className="author">
          By: {writerName}
        </div>
      </div>
      <div className="listItemScore">
        Score: {score}
      </div>
    </div>
  );
}

export default ListItem;