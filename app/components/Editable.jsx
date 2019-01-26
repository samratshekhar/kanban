import React from 'react';

export default ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return (
      <Edit value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <span {...props}>value: {value}</span>
  )
}

const Edit = ({value, onEdit, ...props}) => {
  return (
    <div onClick={onEdit} {...props}>
      <span>
        edit: {value}
      </span>
    </div>
  )
}