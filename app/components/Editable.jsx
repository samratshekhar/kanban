import React from 'react';
import classnames from 'classnames';


const Editable = ({editing, value, onEdit, className, ...props}) => {
  if(editing) {
    return (
      <Editable.Edit
        className={className}
        value={value}
        onEdit={onEdit}
        {...props}
      />
    );
  }
  return (
    <Editable.Value
      className={className}
      value={value}
      {...props}
    />
  )
}

Editable.Value = ({value, className, ...props}) => (
  <span
    className={classnames('value', className)}
    {...props}
  >
    {value}
  </span>
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
    const {value, onEdit, className, ...props} = this.props;
    return (
      <span
        className={classnames('edit', className)}
        {...props}
      >
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