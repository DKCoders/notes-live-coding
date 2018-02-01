import React from 'react';

const ModalLabels = ({ labels }) => {

  return (
    <div className="modal">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <hi className="title">Labels</hi>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default ModalLabels;
