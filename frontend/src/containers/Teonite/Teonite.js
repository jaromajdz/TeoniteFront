import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes.js';

import StatsView from '../../components/StatsView/StatsView';
import Authors from '../Authors/Authors';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';

import './Teonite.css';

  class Teonite extends Component {

    componentDidMount(){
        //console.log('componentDidMount');
        this.props.fetchAuthors();
    }

    render(){
        return (
           <Aux>
            <header className="Appheader">
                <h2>Teonite blog words occurrences.</h2>
            </header>
              <div className="MainWrapper" >
                  <div className="leftSite">
                    {this.props.loading ? <Spinner/> : <Authors/>}
                  </div>

                  <div className="rigthSite">
                    {this.props.loadingStat ? <Spinner/> : <StatsView/>}
                  </div>
                </div>
         </Aux>)
      }
  }

  const mapDispatchToProps = dispatch => {
      return {
        fetchAuthors: ()=>dispatch({type: actionTypes.FETCH_AUTHORS})
      }
    }

const mapStateToProps =  state => {
  return {
    loading: state.loading,
    loadingStat: state.loadingStat
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teonite);
