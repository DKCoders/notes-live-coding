import React from 'react';
import LabelTag from '../../containers/labelTagContainer';

const NoteCard = ({ note }) => {
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
          {labels}
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          Actions
        </p>
      </footer>
    </div>
  );
};

export default NoteCard;
