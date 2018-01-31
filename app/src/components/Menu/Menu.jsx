import React from 'react';

const Menu = ({ labels, selectLabel, selectedLabelId }) => {
  const selectLabelMaker = (labelId) => {
    const param = labelId !== selectedLabelId ? labelId : null;
    return () => selectLabel(param);
  };
  const labelList = labels.map(label => (
    <li key={label._id}>
      <a
        className={selectedLabelId === label._id ? 'is-active' : ''}
        onClick={selectLabelMaker(label._id)}
      >
        {label.label}
      </a>
    </li>
  ));

  return (
    <aside className="menu" style={{paddingTop: '5px'}}>
      <p className="menu-labels">Labels</p>
      <ul className="menu-list">
        {labelList}
      </ul>
    </aside>
  );
};

export default Menu;
