import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

import DropDownList from './DropDownList/DropDownList';
import AuthorsList from './AuthorsList/AuthorsList';
import ClearButton from './ClearButton/ClearButton';
import Aux from '../../hoc/Aux/Aux';
import './Authors.css'

class Authors extends Component {

  render(){
    return <Aux>
              <div>
                    <DropDownList authors={this.props.authors} addAuthor={this.props.addAuthor}/>
                </div>
                 <div>
                    <AuthorsList choosen={this.props.choosen} removeAuthor={this.props.removeAuthor}/>
                   </div>
                   <ClearButton show={Object.keys(this.props.choosen).length>1} clearAll={this.props.clearAll}/>
              </Aux>
      }
  }

  const mapStateToProps = state => {
       return {
         authors: state.authorsList,
         choosen: state.choosenAuthors
       }
    }

  const mapDispatchToProps = dispatch => {
      return {
        addAuthor: (id)=>dispatch({type: actionTypes.ADD_AUTHOR_AND_STAT, id: id }),
        removeAuthor: (id)=>dispatch({type: actionTypes.INIT_REMOVE_AUTHOR, id: id }),
        clearAll: ()=>dispatch({type: actionTypes.CLEAR_CHOOSEN})
      }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(Authors);
