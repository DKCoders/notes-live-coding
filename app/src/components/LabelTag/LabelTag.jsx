import React from 'react';

const LabelTag = ({ label, onDelete = false }) => {
  const button = !onDelete ? null : (
    <button
      className="delete"
      style={{marginLeft: '5px'}}
      onClick={() => onDelete(label._id)}
    />
  );
  return (
    <span className="tag" style={{marginRight: '5px', marginBottom: '5px'}}>
      {label.label}
      {button}
    </span>
  );
};

export default LabelTag;
