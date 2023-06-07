import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Story({ storyInfo }) {
  const [fragments, setFragments] = useState([]);
  const [finalStory, setFinalStory] = useState('');

  const handleSubmit = () => {
    let temp = document.getElementById("inputForm").elements;
    let storyString = '';
    console.log('this be temp', temp);
    let count = 0;
    fragments.map((piece, index) => {
      if (index % 2 === 0) {
        storyString += piece;
      } else {
        storyString += temp[count].value;
        count += 1;
      }
      setFinalStory(storyString);
    })
    console.log('final-------->', storyString);
  };

  const handleReset = () => {
    setFinalStory('');
  };

  useEffect(() => {
    if (storyInfo.story_body !== undefined) {
      setFragments(storyInfo.story_body.split('%%'));
      console.log('these are the fragments', fragments);
    }
  }, [storyInfo.story_body])
  return (
    <div id="Story">
      <form id="inputForm">
        {
          finalStory === '' ?
          fragments.map((piece, index) => {
            if (index % 2 === 0) {
              return (<p key={uuidv4()}>{piece}</p>);
            } else {
              return (
                <input
                  key={uuidv4()}
                  placeholder={piece}
                  className={'storyInput ' + (piece.indexOf('name') !== -1 ? piece : '')}
                  onChange={(e) => {
                    document.querySelectorAll(`.${piece}`).forEach((el) => el.value = e.target.value);
                  }}
                  style={{width: (piece.length) * (piece.length < 10 ? 12 : 7)}}
                />
              )
            }
          }) : <p className="finalP">{finalStory}</p>
        }
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            finalStory === '' ? handleSubmit() : handleReset();
          }}
          value={finalStory === '' ? 'Submit' : 'Reset'}
        />
      </form>
    </div>
  );
}

export default Story;