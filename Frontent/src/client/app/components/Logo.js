import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="image is-2by1 rotate-10">
              <img src="imgs/FunnyEnough.svg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}