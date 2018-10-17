import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import './DropDownList.css';


class DropDownList extends Component {

      onChangeHandler = (event) =>{
            this.props.addAuthor(event.target.value);
      }

      render(){

        const options = Object.keys(this.props.authors).map(
          (key) => {
            return <option value={key} key={key}>{this.props.authors[key]}</option>
          }
        );

      let dropDown = null
      if(this.props.authors){

      dropDown =  (
          <select className="styled-select slate"
              onChange={event=>this.onChangeHandler(event)}
              value = ''
            >
            <option value=''>Select author</option>
            <option value='all'>All</option>
              {options}
            </select>

      );
      }
        return <Aux>{dropDown}</Aux>
      }
  }

export default DropDownList;
