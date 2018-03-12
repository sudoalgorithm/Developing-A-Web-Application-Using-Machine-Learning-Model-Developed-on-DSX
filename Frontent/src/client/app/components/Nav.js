import React from "react";
import { NavLink, withRouter } from "react-router-dom";


class Nav extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
      
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }      
    });
  }

  render() {
    var activeClass = "";

    return (
      <div className="hero-head">
        <nav className="navbar has-shadow is-primary force-transparent">
          <div className="container">
            <div className="navbar-brand mt-025">
              <NavLink className="navbar-item" to="/">
                <div className="brand-image is-vcentered pr-1">
                  <img src="imgs/dsx-logo-lg.svg"/>
                </div>
                <div className="brand-text is-vcentered">
                  <h3 className="margin-top-0-35">
                    IBM <span className="has-text-weight-bold">Data Science Experience Tutorial</span>
                  </h3>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);