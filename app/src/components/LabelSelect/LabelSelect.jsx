import React from 'react';

const LabelSelect = ({
  labels,
  blackList = [],
  onChange = () => {},
}) => {
  const options = labels
    .filter(label => !blackList.includes(label._id))
    .map(label => (
      <option value={label._id} key={label._id}>{label.label}</option>
    ));
  return (
    <div className="select">
      <select onChange={event => onChange(event.target.value)}>
        <option>Select Label</option>
        {options}
      </select>
    </div>
  );
};

export default LabelSelect;
