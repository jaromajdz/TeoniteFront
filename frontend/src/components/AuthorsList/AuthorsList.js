  import React, { Component } from 'react';
  import * as actionTypes from '../../store/actionTypes.js';
  import {connect} from 'react-redux';

  import Aux from '../../hoc/Aux/Aux';
  import './AuthorsList.css';

  class AuthorsList extends Component {

      render(){




        const authors = Object.keys(this.props.authors).map(
          (key)=>{
            return <div className="AuthorB" key={key}>
                    <div className="Author">
                      {this.props.authors[key]}
                    </div>
                    <div className="Author Delete"
                       onClick={()=>this.props.removeAuthor(key)}>
                       x</div>
              </div>
          }
         )


        return <Aux>
                  {authors}
              </Aux>
      }
  }

  const mapStateToProps = state => {
       return {
         authors: state.choosenAuthors
       }
    }

  const mapDispatchToProps = dispatch => {
      return {
        removeAuthor: (id)=>dispatch({type: actionTypes.INIT_REMOVE_AUTHOR, id: id })
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
