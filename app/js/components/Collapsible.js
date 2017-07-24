import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId, each, flatten } from 'lodash';
import $ from 'jquery';

class CollapsibleGroup extends Component {
  handleOnClick(index) {
    const targetComponent = this.refs['collapse-' + index];

    if(targetComponent) {
      each(this.refs, (ref, name) => {
        if(name !== ('collapse-' + index)) {
          ref.toggleActive({ active: false });
        }
      });

      targetComponent.toggleActive({ active: true });
    }
  }

  render() {
    const {
      className,
      popout,
      active,
      expandable
    } = this.props;

    const children = flatten([this.props.children]);

    const classes = [
      'collapsible',
      `${className || ''}`,
      `${popout ? 'popout' : ''}`
    ]
    return (
      <div className={classes.join(' ')}>
        {children.map((child, idx) => {
          const isActive = idx === active;

          if(!child.props.title) {
            console.error('CollapsibleGroup: child elements must have a "title" prop. Skipping child element.');
            return(null);
          }

          return (
            <Collapsible
              key={uniqueId('collapse-')} active={isActive} ref={`collapse-${idx}`}
              handleOnClick={this.handleOnClick.bind(this, idx)}>
              {child}
            </Collapsible>
          )

        })}
      </div>
    )
  }
}

CollapsibleGroup.propTypes = {

};


class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active ? props.active : false
    }
  }

  toggleActive({ active }) {
    this.setState({ active });      
  }

  render() {
    const {
      active
    } = this.state;

    const child = this.props.children;

    return (
      <div className={ `collapsible-item ${active ? 'active' : ''}` } ref="container">
        <div className={ `collapsible-header ${active ? 'active' : ''}` } ref="header"
          onClick={ this.props.handleOnClick }>{child.props.title}</div>
        <div className="collapsible-body" ref="body">
          <div className="collapsible-content">
            { child }
          </div>
        </div>
      </div>
    )
  }
}

Collapsible.propTypes = {

};

export {
  Collapsible,
  CollapsibleGroup
};
