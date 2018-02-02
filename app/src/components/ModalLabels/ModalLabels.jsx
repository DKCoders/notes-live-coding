import React from 'react';
import { newLabelTemplate } from '../../modules/label/reducer';

const ModalLabels = ({ labels, editableLabel, updateEditableLabel, updateModalLabel, saveLabel }) => {
  const closeModal = () => updateModalLabel(false);
  const cancelEdit = () => updateEditableLabel({...newLabelTemplate});
  const labelsList = labels.map(label => {
    const button = label._id === editableLabel._id ? '...Editing' : (
      <button className="button" onClick={() => updateEditableLabel(label)}>Edit</button>
    );
    return (
      <div className="level" key={label._id}>
        <div className="level-left" key={label._id}>
          <div className="level-item">
            {label.label}
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            {button}
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <div className="box">
          <h1 className="title">Labels</h1>
          <section className="section">
            <div className="field has-addons">
              <div className="control" style={{flex: 1}}>
                <input
                  className="input"
                  type="text"
                  placeholder="New label"
                  value={editableLabel.label}
                  onChange={({target}) => updateEditableLabel({...editableLabel, label: target.value})}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  disabled={!editableLabel || !editableLabel.label}
                  onClick={() => saveLabel(editableLabel)}
                >
                  {!editableLabel._id ? 'Add' : 'Save'}
                </button>
              </div>
              <div className="control">
                <button
                  className="button"
                  disabled={!editableLabel || !editableLabel.label}
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="box" style={{height: '300px', overflowY: 'auto'}}>
              {labelsList}
            </div>
          </section>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal} />
    </div>
  );
};

export default ModalLabels;
