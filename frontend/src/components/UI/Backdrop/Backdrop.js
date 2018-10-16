import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';


const backdrop = (props) =>{
  return <div className="Backdrop" onClick={props.click}></div>
      }

backdrop.propTypes = {
  click: PropTypes.object.isRequired
}

export default backdrop;
