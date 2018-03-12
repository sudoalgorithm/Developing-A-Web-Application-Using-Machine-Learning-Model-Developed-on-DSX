import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import sanitizeHtml from 'sanitize-html';

export default class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.deleteJoke = this.deleteJoke.bind(this);
  }

  deleteJoke(e) {
    e.preventDefault();
    this.props[2].deleteJoke(sanitizeHtml(this.refs.joke.innerHTML, {
      allowedTags: [],
      nonTextTags: ['a']
    }));
  }

  render() {
    return (
      <li ref="joke" className="my-1">
        <span className="has-text-weight-semibold">{this.props[1]}.</span> {this.props[0].text}
        <a class="button is-danger is-outlined is-small is-pulled-right" onClick={this.deleteJoke}>Delete</a>
      </li>
    );
  }
}