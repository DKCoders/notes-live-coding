import React from 'react';
import LabelTag from '../../containers/labelTagContainer';

const NoteCard = ({ note, updateEditableNote, deleteNote }) => {
  const labels = note.labels.map(labelId => (
    <LabelTag labelId={labelId} key={labelId} />
  ));
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {note.title}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {note.content}
        </div>
        <div className="content">
          <div className="tags">
            {labels}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <button className="button" onClick={() => updateEditableNote(note)}>Edit</button>
        </p>
        <p className="card-footer-item">
          <button className="button" onClick={() => deleteNote(note)}>Delete</button>
        </p>
      </footer>
    </div>
  );
};

export default NoteCard;
