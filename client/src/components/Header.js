import React, { Component,Fragment  } from "react";
import { Navbar, NavItem,Dropdown } from 'react-materialize';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return <li><a href="/auth/twitter">Login With Twitter</a></li>;
      default:
        return (
        <Fragment> 
            <Dropdown trigger={
                // eslint-disable-next-line
                <li><a className="dropdown-trigger" >{this.props.auth.name}<i className="material-icons right">arrow_drop_down</i></a></li>
              }>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/twits">Twits</Link></li>
              <li><Link to="/logs">Logs</Link></li>
              <NavItem divider />
                        
            <NavItem href="/api/logout">Logout</NavItem>
            </Dropdown>
        </Fragment>);
    }
  }
  renderNav(){
    return (
      <Navbar style={{padding : "0 10px"}} className="light-blue" brand='Twits' href={this.props.auth ? '/twits':'/'}  right>
        {this.renderContent()}
      </Navbar>
    )
  }
  render() {
    return (
      <div>
        {this.renderNav()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
