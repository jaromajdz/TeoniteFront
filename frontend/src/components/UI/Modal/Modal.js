import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import Aux from '../../../hoc/Aux/Aux';

import './Modal.css';


const modal =(props)=>{
    return <Aux>
            <Backdrop click={props.closeModal}/>
            <div className="Modal" onClick={props.closeModal} >
              {props.children}
           </div>
         </Aux>
};

modal.propTypes = {
  closeModal: PropTypes.object.isRequired
}

export default modal;
