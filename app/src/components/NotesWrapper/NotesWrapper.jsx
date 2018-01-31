import React from 'react';
import NoteCard from '../../containers/noteCardContainer';

const NotesWrapper = ({ noteIds }) => {
  const cards = noteIds.map(noteId => (
      <div className="column is-one-third" key={noteId}>
        <NoteCard noteId={noteId} />
      </div>
  ));
  return (
    <div className="columns is-multiline is-mobile">
      {cards}
    </div>
  );
};

export default NotesWrapper;
