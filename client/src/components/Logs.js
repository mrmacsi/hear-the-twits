import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLogs } from "../actions";

class Logs extends Component {
  componentWillMount() {
    this.props.fetchLogs();
  }

  renderLogs() {
    return this.props.logs.map(log => {
      return (
        <div className="card darken-1" key={log._id}>
          <div className="card-content">
            <div className="row valign-wrapper">
              <div className="col s4 m12">
                <div>user: {log.user}</div>
                <div>oauthAccessToken: {log.oauthAccessToken}</div>
                <div>oauthAccessTokenSecret: {log.oauthAccessTokenSecret}</div>
                <div>oAuthProvider: {log.oAuthProvider}</div>
              </div>
            </div>
          </div>
          <div className="card-action">
            <div className="row" style={{"marginBottom": "0px"}}>
              <div className="col s12 "><span className="right">Created At: {new Date(log.dateCreated).toLocaleDateString()}</span></div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>
      {this.renderLogs()}
    </div>;
  }
}

function mapStateToProps({ logs }) {
  //console.log(logs)
  return { logs };
}

export default connect(
  mapStateToProps,
  { fetchLogs }
)(Logs);
