import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer has-shadow-inverted is-bold padding-y-2-5">
            <div className="container">
                <div className="content has-text-centered has-text-grey">
                  <p className="is-size-7">
                    Made with <i class="fa fa-heart" aria-hidden="true"></i> in Dubai by
                  </p>
                  <div className="columns">
                    <div className="column is-offset-4 is-2">
                      <Link to="https://developer.ibm.com/code/community/advocates/#!/advocate/kunal.malhotra1@ibm.com">
                        <img className="circle light-border" src="https://www.wrike.com/avatars//60/67/FiaeCHDCqbsR.png" />
                      </Link>
                      <br/>
                      <span>
                        <Link className="has-text-grey is-size-6 has-text-weight-semibold" to="https://developer.ibm.com/code/community/advocates/#!/advocate/kunal.malhotra1@ibm.com">
                          Kunal Malhotra
                        </Link>
                      </span>
                    </div>
                    <div className="column is-2">
                      <Link to="https://developer.ibm.com/code/community/advocates/#!/advocate/heba.elshimy1@ibm.com">
                        <img className="circle light-border" src="https://www.wrike.com/avatars//77/4F/RMN5Y7dQwLZy.png" />
                      </Link>
                      <br/>
                      <span>
                        <Link className="has-text-grey is-size-6 has-text-weight-semibold" to="https://developer.ibm.com/code/community/advocates/#!/advocate/heba.elshimy1@ibm.com">
                          Heba El-Shimy
                        </Link>
                      </span>
                    </div>
                  </div>
                  <span className="is-size-7">2017 &copy; All Rights Reserved.</span>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}