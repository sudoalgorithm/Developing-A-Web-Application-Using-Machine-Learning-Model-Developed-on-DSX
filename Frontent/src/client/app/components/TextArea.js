import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.addJoke = this.addJoke.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addJoke(e) {
    e.preventDefault();
    var sanitizeText = sanitizeHtml(this.refs.textContent.value.trim(), {
      textFilter: function(text) {
        var newText = text.replace(/&quot;/g, '"');
        return newText;
      }
    });
    this.props.addJoke(sanitizeText);
    
    this.refs.textContent.value = '';
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.refs.textContent.value != '') {
      this.addJoke(e);
    }

    this.props.history.push({
      pathname: '/results',
      state: {
        jokes: this.props.jokes,
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 is-offset-3">
            <div>
              <textarea class="textarea" type="text" ref="textContent" placeholder="Tell me a joke..."></textarea>
            </div>
            <div className="py-2 has-text-centered is-centered">
              <a className="button is-medium mx-1" onClick={this.addJoke}>
                <span className="icon is-small"><i className="fa fa-plus"></i></span>
                <span>Add</span>
              </a>
              <a className="button is-secondary is-medium mx-1" onClick={this.handleSubmit}>
                <span className="icon is-small"><i className="fa fa-check"></i></span>
                <span>Done</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}