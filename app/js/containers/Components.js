import React from 'react';
import Input from '../components/Forms/Input';

function onInputChange(val, evt) {
  console.log('input change trigger: ', val);
}


const Components = (props) => (
  <div className="primary-container components-container flex-wrapper row with-sidenav">
    <div className="flex-column nav-column">
      <div className="side-nav fixed">
        <ul>
        </ul>
      </div>
    </div>
    <div className="flex-column main-content-container">

    </div>

  </div>
)

export default Components;
