import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


export class Modal extends Component {
  constructor(props) {
    super(props);

    this.onModalClose = this.onModalClose.bind(this);

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    if(this.props.open === true) {
      this.setState({ open: true });
      this.handleModalOpen(this.props);
    }
  }

  handleModalOpen(props) {
    $(this.modal).animate({
      top: props.endingTop,
      opacity: 1
    }, props.inDuration);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });

      if(nextProps.open === true) {
        this.handleModalOpen(nextProps);
      } else {
        this.onModalClose(nextProps);
      }
    }
  }

  onModalClose(props) {
    const isValid = props.onBeforeClose();

    if(isValid) {
      this.handleModalClose(props);
    }
  }

  handleModalClose(props) {
    this.animateClose(props)
      .then(() => {
        this.setState({ open: false });
        props.onClose();
      });
  }

  animateClose(props) {
    return new Promise((resolve, reject) => {
      $(this.modal).animate({
        top: props.startingTop,
        opacity: 0
      }, props.outDuration, () => {
        resolve();
      });
    });
  }

  render() {
    const {
      className,
      buttonName,
      cancelButton,
      opacity,
      dismissible,
      startingTop
    } = this.props;
    const {
      open
    } = this.state;

    const closeEvent = this.onModalClose.bind(this, this.props);

    const openStyles = {
      display: 'block',
      zIndex: 1000,
      top: startingTop
    };

    const overlayStyles = {
      display: 'block',
      zIndex: 900,
      opacity
    }

    return (
      <div>
        <div className={`modal-overlay`}
          ref={(d) => { this.overlay = d}}
          onClick={ dismissible ? closeEvent : null }
          style={ open ? overlayStyles : {} }></div>
        <div className={`modal ${className || ''}`} style={ open ? openStyles : {} }
          ref={(m) => { this.modal = m}}>
          <div className="modal-content">
            {this.props.children}
          </div>
          <div className="modal-footer right-align">
            <a onClick={ closeEvent } className="btn">{ buttonName }</a>
            { cancelButton ? (
              <a onClick={ closeEvent } className="btn btn-flat">Cancel</a>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export const defaultProps = {
  onClose: () => {},
  onBeforeClose: () => { return true; },
  buttonName: 'Close',
  cancelButton: false,
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%'
}

Modal.defaultProps = defaultProps;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onBeforeClose: PropTypes.func,
  buttonName: PropTypes.string,
  cancelButton: PropTypes.bool,
  dismissible: PropTypes.bool,
  opacity: PropTypes.number,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  startingTop: PropTypes.string,
  endingTop: PropTypes.string
}

export default Modal
