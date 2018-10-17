import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import './AuthorsList.css';

const AuthorsList = (props) => {
    const authors = Object.keys(props.choosen).map(
      (key)=>{
        return <div className="AuthorB" key={key}>
                  <div className="Author">
                    {props.choosen[key]}
                    </div>
                    <div className="Author Delete" onClick={()=>props.removeAuthor(key)}>x</div>
              </div>
          }
         )

    return <Aux>{authors}</Aux>
  }

export default AuthorsList;
