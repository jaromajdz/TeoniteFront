  import React, { Component } from 'react';

  import DropDownList from '../../components/DropDownList/DropDownList';
  import AuthorsList from '../../components/AuthorsList/AuthorsList';
  import Aux from '../../hoc/Aux/Aux';

  import './Authors.css'

  class Authors extends Component {

      render(){
        return <Aux>

                  <div>

                        <AuthorsList/>


                    </div>

                 <div>

                      <DropDownList/>

                 </div>

              </Aux>
      }
  }
export default Authors;
