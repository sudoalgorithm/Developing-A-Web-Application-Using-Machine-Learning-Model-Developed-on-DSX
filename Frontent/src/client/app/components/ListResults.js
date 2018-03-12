import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import JokeResult from './JokeResult';
import FunnyStamp from './FunnyStamp';
import NotFunnyStamp from './NotFunnyStamp';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.rateJokes = this.rateJokes.bind(this);
  }

  rateJokes(jokes) {
    var ratings = [];
    var rated;
    
    console.log(jokes);
    for (var i=0; i<jokes.length; i++) {
      rated = this.props.rateJoke('https://joke-sentiments-analysis.mybluemix.net/classify/' + jokes[i].text);
      ratings.push(rated);
    }
  }

  numberOfJokes = null;
  numberOfFunnyJokes = null;
  FunnyEnough = null;
  JokeComponents = null;


  componentDidMount() {
    this.rateJokes(this.props.jokes);
    this.numberOfJokes = this.props.jokes.length;
    this.numberOfFunnyJokes = 0;
  }

  componentWillReceiveProps() {
    
    
  }

  render() {
    this.JokeComponents = this.props.jokes.map((joke, i) => {
      var counter = i+1;
      return <JokeResult key={i} {...[joke, counter, this.props]}/>;
    });

    for (var i=0; i<this.numberOfJokes; i++) {
      if (this.props.ratings[i] == true) {
        this.numberOfFunnyJokes += 1;
      }
    }

    if (this.numberOfFunnyJokes >= this.numberOfJokes/2) {
      this.FunnyEnough = <FunnyStamp {...this.props}/>;
    } else {
      this.FunnyEnough = <NotFunnyStamp {...this.props}/>;
    }

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3 is-vcentered is-centered">
            <ul>
              { this.JokeComponents }
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3 is-vcentered is-centered">
            { this.FunnyEnough }
          </div>
        </div>
      </div>
    );
  }
}