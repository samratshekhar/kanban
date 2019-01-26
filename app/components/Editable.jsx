import React from 'react';

export default ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return (
      <Edit value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <span {...props}>{value}</span>
  )
}

class Edit extends React.Component {
  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onFinishEditing(e);
    }
  }

  onFinishEditing = (e) => {
    this.props.onEdit(e.target.value)
  }
  render() {
    const {value, onEdit, ...props} = this.props;
    return (
      <span {...props}>
        <input
          type='text'
          autoFocus={true}
          defaultValue={value}
          onKeyPress={this.onKeyPress}
          onBlur={this.onFinishEditing}
        />
      </span>
    )
  }
}