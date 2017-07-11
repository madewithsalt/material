import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.value ? true : false,
      value: props.value
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({
      active: this.state.value ? true : false
    });
  }

  handleChangeEvent(evt) {
    const value = evt.target.value;
    this.setState({ value });

    this.props.onChange({
      name: this.props.name,
      value
    });
  }

  render() {
    const {
      name,
      label,
      type,
      disabled,
      className,
      icon
    } = this.props;

    const {
      active,
      value
    } = this.state;

    return (
      <div className={`input-field ${className || ''}`}>
        { icon ? (
          <i className={`material-icons prefix ${active ? 'active' : ''}`}>{icon}</i>
        ) : null }
        <input id={name} type={ type || 'text'}
          name={name}
          ref={ (i) => this.input = i }
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChangeEvent}
          disabled={disabled || false}
          className="validate" defaultValue={value} />
        <label className={active ? 'active' : ''} htmlFor={name}>{label}</label>
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
