import React from 'react';
import { NavLink } from "react-router-dom";

import ListResults from '../components/ListResults';

export default class Results extends React.Component {
  render() {
    return (
      <div className="is-fullheight py-2 is-centered"> 
        <h2 className="title has-text-centered">Your Results</h2>
        <ListResults {...this.props}/>
      </div>
    );
  }
}