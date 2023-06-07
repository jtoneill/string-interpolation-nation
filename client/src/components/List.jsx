import React, { useState, useEffect } from 'react';
import parse from '../parse';
import ListItem from './ListItem.jsx';
import AddStoryModal from './AddStoryModal.jsx';

function List({ setStoryId, toggle, setToggle }) {
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    parse
      .get('/sin/list')
      .then((res) => {
        console.log('list res', res);
        setList(res);
      })
      .catch((err) => {
        console.log('List get err', err.message);
      });
  }, [toggle]);

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
      <AddStoryModal
        toggle={toggle}
        setToggle={setToggle}
        modalOpen={modalOpen}
        closeModal={() => {setModalOpen(false)}}
      />
      <button
        className="addStoryBtn btn"
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(true);
        }}
      >Add Story</button>
    </div>
  );
}

export default List;