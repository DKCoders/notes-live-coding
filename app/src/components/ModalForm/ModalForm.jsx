import React from 'react';

const requiredFields = ['title', 'content'];

const ModalForm = ({ note, updateEditableNote, saveNote }) => {
  if (!note) {
    return null;
  }
  const missingFields = requiredFields.filter(field => !note[field]);
  const alert = !missingFields.length
    ? null
    : (
      <div className="notification is-danger">
        {`Fields required: ${missingFields.join(', ')}`}
      </div>
    );
  const saveModal = () => {
    saveNote(note);
  };
  const cancelModal = () => updateEditableNote(null);
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Note Title..."
                value={note.title}
                onChange={({target}) => updateEditableNote({...note, title: target.value})}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Note Content"
                value={note.content}
                onChange={({target}) => updateEditableNote({...note, content: target.value})}
              />
            </div>
          </div>
          {alert}
          <div className="field is-grouped">
            <div className="control">
              <button disabled={missingFields.length} className="button is-link" onClick={saveModal}>{!note._id ? 'Add' : 'Save'}</button>
            </div>
            <div className="control">
              <button className="button" onClick={cancelModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default ModalForm;
