import React from 'react';

const newNoteTemplate = {
  title: '',
  content: '',
  labels: [],
};

const NewNote = ({ onClick }) => (
  <div className="field" style={{ paddingTop: '5px'}}>
    <div className="control">
      <input
        className="input"
        type="text"
        placeholder="New note..."
        onClick={() => onClick(newNoteTemplate)}
      />
    </div>
  </div>
);

export default NewNote;
