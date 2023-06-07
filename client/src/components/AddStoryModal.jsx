import React, { useState } from 'react';
import ReactDom from 'react-dom';
import parse from '../parse';

function AddStoryModal({ modalOpen, closeModal }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [newStory, setNewStory] = useState('');

  const handlePostStory = async () => {
    const data = {
      writer_name: name,
      story_name: title,
      story_body: newStory,
    }
    await parse
      .post('/sin', data)
      .then((res) => {
        console.log('story posted', res);
        setToggle(!toggle);
      })
      .catch((err) => {
        console.log('AddStoryModal post err', err.message);
      });
  }

  if (!modalOpen) { return null; }
  return ReactDom.createPortal(
    <>
      <div
        id="overlay"
        onClick={(e) => {
          e.preventDefault();
          closeModal();
        }}
      ></div>
      <div id="StoryModal">
        <p>Add Your Own Story</p>
        <form className="addStoryForm">
          <input
            type="text"
            placeholder="Your Nickname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Story Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="20"
            cols="70"
            placeholder="Story..."
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
          />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault
              handlePostStory();
            }}
          />
        </form>
        <button
          onClick={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >Cancel</button>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default AddStoryModal;