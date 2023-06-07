import React, { useState } from 'react';
import ReactDom from 'react-dom';
import parse from '../parse';
import Instructions from './Instructions.jsx';

function AddStoryModal({ modalOpen, closeModal, toggle, setToggle }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [newStory, setNewStory] = useState('');
  const [showTips, setShowTips] = useState(false);

  const postStory = async () => {
    const data = {
      writer_name: name,
      story_name: title,
      story_body: newStory,
    }
    console.log('trying to post this', data);
    await parse
      .post('/sin', data)
      .then((res) => {
        console.log('story posted', res);
        setToggle(!toggle);
      })
      .catch((err) => {
        console.log('AddStoryModal post err', err.message);
      });
  };

  const showInstructions = () => {
    setShowTips(true);
  };

  if (!modalOpen) { return null; }
  return ReactDom.createPortal(
    <>
      <div
        id="overlay"
        onClick={(e) => {
          e.preventDefault();
          closeModal();
          setShowTips(false);
        }}
      ></div>
      <div id="StoryModal">
        <h2>Add Your Own Story</h2>
        <form
          className="addStoryForm"
          onSubmit={(e) => {
            console.log('its been clicked');
            e.preventDefault();
            postStory();
            closeModal();
            setShowTips(false);
          }}
        >
          <input
            className="addStoryInput"
            type="text"
            placeholder="Your Nickname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="addStoryInput"
            type="text"
            placeholder="Story Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="addStoryInput"
            rows="20"
            cols="70"
            placeholder="Story..."
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
            required
          />
          <div className="modalBtnContainer">
            <button
              className="modalBtn btn"
              type="submit"
            >Submit</button>
            <button
              className="instructionsBtn btn"
              onClick={(e) => {
                e.preventDefault();
                setShowTips(!showTips);
              }}
            >Instructions</button>
            <button
              className="modalBtn btn"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
                setShowTips(false);
              }}
            >Cancel</button>
          </div>
          {showTips ? <Instructions /> : null}
        </form>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default AddStoryModal;