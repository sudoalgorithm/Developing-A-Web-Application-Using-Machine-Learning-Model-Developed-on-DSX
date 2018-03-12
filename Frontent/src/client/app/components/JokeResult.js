import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";

export default class Joke extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const values = [];

    for (var i=0; i<this.props[2].ratings.length; i++) {
      if (this.props[2].ratings[i] == true) {
        values[i] = 'Funny';
      } else {
        values[i] = 'Not Funny';
      }
    }
    
    console.log();
    return (
      <li ref="joke" className="my-1">
        <span>
          <span className="has-text-weight-semibold">{this.props[1]}.</span> {this.props[0].text}
          <span className="has-text-weight-semibold is-pulled-right">{values}</span>
        </span>
      </li>
    );
  }
}