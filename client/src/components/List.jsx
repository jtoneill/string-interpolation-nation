import React, { useState, useEffect } from 'react';
import parse from '../parse';
import ListItem from './ListItem.jsx';

function List({ setStoryId }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    parse
      .get('/sin/list')
      .then((res) => {
        console.log('list res', res);
        setList(res);
      })
  }, []);

  return (
    <div id="List">
     {
      list.map((info) => (
        <ListItem
          key={info.id}
          id={info.id}
          storyName={info.story_name}
          writerName={info.writer_name}
          score={info.score}
          setStoryId={setStoryId}
        />
      ))
     }
    </div>
  );
}

export default List;