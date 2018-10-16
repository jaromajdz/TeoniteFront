import React, { Component } from 'react';
import {connect} from 'react-redux';


import Aux from '../../hoc/Aux/Aux';


import './StatsView.css';

class StatsView extends Component {

  render(){

    let stats = 'No data to show!';
    const isStatNotEmpty = Object.keys(this.props.statsSummary).length

      if (isStatNotEmpty){
        let statsSorted = [];

        for (let word in this.props.statsSummary) {
              statsSorted.push([word, this.props.statsSummary[word]]);
            }
            statsSorted.sort((a, b) => (
                 b[1] - a[1]
            ));

            stats = statsSorted.map((item, id)=>{
                return <div key={id} className="OneRow">
                        <div className="No">{id+1}</div>
                        <div className="Cel">{item[0]}</div>
                        <div className="Cel">{item[1]}</div>

                    </div>
                  }
              )
            }

        return <Aux>
                { isStatNotEmpty ?
                  <div  className="OneRow Blue">
                  <div className="No">&nbsp;</div>
                  <div className="Cel">Word</div>
                  <div className="Cel">Occurrence</div>
                  </div>
                  : null
                }
                {stats}
              </Aux>
      }
  }

const mapStateToProps = state => {
  return {
    statsSummary: state.statsSummary,
  }
}

export default connect(mapStateToProps, null)(StatsView);
