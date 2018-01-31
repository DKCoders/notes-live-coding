import React from 'react';

const NoteCard = ({ note }) => (
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
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        Labels
      </p>
      <p className="card-footer-item">
        Actions
      </p>
    </footer>
  </div>
);

export default NoteCard;
