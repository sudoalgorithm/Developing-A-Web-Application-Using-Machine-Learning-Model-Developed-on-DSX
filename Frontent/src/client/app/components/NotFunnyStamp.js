import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    console.log(this.props.ratings.length);
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-1">
            <div className="image rotate-10">
              <img src="imgs/not-funny.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}