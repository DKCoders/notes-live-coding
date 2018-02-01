import React from 'react';
import LabelTag from '../../containers/labelTagContainer';
import LabelSelect from '../../containers/labelSelectContainer';

const requiredFields = ['title', 'content'];

const ModalForm = ({ note, updateEditableNote, saveNote }) => {
  if (!note) {
    return null;
  }
  const saveModal = () => {
    saveNote(note);
  };
  const cancelModal = () => updateEditableNote(null);
  const onAddLabel = (labelIdAdded) => {
    if (labelIdAdded) {
      const labels = note.labels.concat(labelIdAdded);
      updateEditableNote({ ...note, labels });
    }
  };
  const onDeleteLabel = (labelIdRemoved) => {
    const labels = note.labels.filter(labelId => labelId !== labelIdRemoved);
    updateEditableNote({...note, labels });
  };
  const missingFields = requiredFields.filter(field => !note[field]);
  const alert = !missingFields.length
    ? null
    : (
      <div className="notification is-danger">
        {`Fields required: ${missingFields.join(', ')}`}
      </div>
    );
  const tags = note.labels.map(labelId => (
    <LabelTag
      labelId={labelId}
      onDelete={onDeleteLabel}
      key={labelId}
      style={{marginRight: '5px'}}
    />
  ));
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={cancelModal} />
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
          <div className="field">
            <label className="label">Labels</label>
            <div className="control">
              {tags}
              <LabelSelect
                blackList={note.labels}
                onChange={onAddLabel}
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
      <button className="modal-close is-large" onClick={cancelModal} aria-label="close" />
    </div>
  );
};

export default ModalForm;
