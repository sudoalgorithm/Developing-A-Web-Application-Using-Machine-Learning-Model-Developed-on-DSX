import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import Joke from './Joke';

export default class List extends React.Component {
  render() {
    const JokeComponents = this.props.jokes.map((joke, i) => {
      var counter = i+1;
      return <Joke key={i} {...[joke, counter, this.props]}/>;
    });
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3 is-vcentered is-centered">
            <ul>
              { JokeComponents }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}