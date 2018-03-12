import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from '../components/Logo';
import TextArea from '../components/TextArea';
import List from '../components/List';

export default class Home extends React.Component {
 
  render() {
    return (
      <div className="is-fullheight py-2">
        <Logo />
        <TextArea {...this.props}/>
        <List {...this.props}/>
      </div>
    );
  }
}