import React from 'react';

const Editable = ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return (
      <Editable.Edit value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <Editable.Value value={value} {...props} />
  )
}

Editable.Value = ({value, ...props}) => (
  <span {...props}>{value}</span>
)

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

Editable.Edit = Edit;

export default Editable;