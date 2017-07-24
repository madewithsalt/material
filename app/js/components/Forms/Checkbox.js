import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(evt) {
    const value = evt.target.checked;
    this.setState({ value });

    this.props.onChange({
      name: this.props.name,
      value
    });
  }

  render() {
    const {
      children,
      className,
      checked,
      disabled
    } = this.props;

    return(
      <input type="checkbox" className={`${className || ''}`} checked disabled
        defaultChecked={checked}
        onChange={this.handleChangeEvent}/>
    )
  }

}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired
}


export default Checkbox;
