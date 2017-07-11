import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.value ? true : false,
      value: props.value,
      height: props.defaultHeight
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({
      active: this.state.value ? true : false
    });
    this.handleResize();
  }

  handleChangeEvent(evt) {
    const value = evt.target.value;
    if(this.props.resizable) {
      this.handleResize();
    }

    if(value !== this.state.value) {
      this.setState({ value });
      this.props.onChange({
        name: this.props.name,
        value
      });
    }

  }

  handleResize() {
    const height = this.shadow.clientHeight + 45;
    if(height > this.props.defaultHeight) {
      this.setState({ height });
    } else if(height < this.props.defaultHeight) {
      this.setState({ height: this.props.defaultHeight });
    }

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
      value,
      height
    } = this.state;

    const shadowStyles = {
      visibility: 'hidden',
      position: 'absolute',
      top: 0,
      height: 'auto',
      display: 'block',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word'
    }

    return (
      <div className={`input-field ${className || ''}`} style={{position: 'relative'}}>
        { icon ? (
          <i className={`material-icons prefix ${active ? 'active' : ''}`}>{icon}</i>
        ) : null }
        <textarea id={name} name={name}
          className="textarea"
          style={{height: `${height}px`}}
          ref={ (i) => this.input = i }
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChangeEvent}
          onKeyUp={this.handleChangeEvent}
          disabled={disabled || false}
          defaultValue={value} />
        <label className={active ? 'active' : ''} htmlFor={name}>{label}</label>
        <div
          className="textarea"
          style={shadowStyles}
          ref={(s) => { this.shadow = s }}
          tabIndex="-1"
          readOnly
          aria-hidden="true"
          >{value}</div>
      </div>
    );
  }
}

TextArea.defaultProps = {
  resizable: true,
  defaultHeight: 65
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
