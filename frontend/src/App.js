import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Teonite from './containers/Teonite/Teonite';
import NoExist from './components/UI/NoExist/NoExist';
import Modal from './components/UI/Modal/Modal';

import * as actionTypes from './store/actionTypes';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Switch>
            <Route path="/" exact render={()=><Redirect to="/stat"/>}/>
            <Route path="/stat" exact component={Teonite}/>
            <Route component={NoExist} />
          </Switch>
          {this.props.error ? <Modal closeModal={this.props.closeModal}>{this.props.error.message}</Modal> : null}
      </div>

      </BrowserRouter>
    );
  }
}

const mapStateToProps =(state)=>{
  return {
    error: state.err
  }
}


const mapDispatchToProps = dispatch =>{
  return {
    closeModal: ()=>dispatch({type: actionTypes.ERROR_RESET})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
