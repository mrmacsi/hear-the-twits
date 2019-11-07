import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTwits } from "../actions";
import { NavItem,Dropdown,Button } from 'react-materialize';
import _ from "lodash";

class TwitList extends Component {
  state = {
    search: "",
    sortDirection: "desc",
    sortBy: "id",
    twits: null
  }
  componentWillMount() {
    this.props.fetchTwits();
  }
  renderTwits() {
    var { twits } = this.props;
    const { sortDirection,sortBy,search } = this.state;
    //sort here
    twits = _.orderBy(twits, [sortBy],[sortDirection]);

    //filter here
    twits = _.filter(twits, item => item.text.toLowerCase().indexOf(search) !== -1 );

    return twits.map(twit => {
      return (
        <div className="card darken-1" key={twit.id}>
          <div className="card-content">
            <div className="row valign-wrapper">
              <div className="col s4 m2">
                <img src={twit.user.profile_image_url} alt="" className="circle responsive-img valign"/>
                <div>@{twit.user.screen_name}</div>
              </div>
              <div className="col s8 m10">
                <span className="black-text">
                  {twit.text}
                </span>
              </div>
            </div>
          </div>
          <div className="card-action">
            <div className="row" style={{"marginBottom": "0px"}}>
              <div className="col s12 "><span className="right">Twitted On: {new Date(twit.created_at).toLocaleDateString()}</span></div>
            </div>
          </div>
        </div>
      );
    });
  }

  sortTwits(sort) {
    const { sortDirection } = this.state;
    this.setState({
      sortDirection: sortDirection === "asc" ? "desc" : "asc",
      sortBy:sort
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  actionTab() {
    return (
        <div className="card darken-1">
          <div className="card-content">
            <div className="row valign-wrapper">
              <div className="col s4 m6">
                <div style={{"position": "relative", "zIndex": "0"}}>
                  <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input type="text" name="search" onChange={this.onChange} value={this.state.search} id="search" />
                    <label htmlFor="search">Search</label>
                  </div>
                </div>
              </div>
              <div className="col s8 m6">
                <Dropdown trigger={
                  // eslint-disable-next-line
                  <Button waves="light" node="a">Sort by</Button>
                }>
                <NavItem onClick={this.sortTwits.bind(this,"id")}>Date</NavItem>
                <NavItem onClick={this.sortTwits.bind(this,"text")}>Twit</NavItem>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      );
  }

  render() {
    return <div>
      {this.actionTab()}
      {this.renderTwits()}
    </div>;
  }
}

function mapStateToProps({ twits }) {
  //console.log(twits)
  return { twits };
}

export default connect(
  mapStateToProps,
  { fetchTwits }
)(TwitList);
