import React, { Component } from 'react';
import axios from 'axios';

class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/repos/fossasia/loklak_search/contributors`)
      .then(res => {
        const contributors = res.data.map(obj => obj);
        this.setState({ contributors });
      });
  }

  render() {
    return (
      <div>
        <div className="col-sm-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <a href="http://fossasia/loklak_search" target="blank">fossasia/loklak_search</a>
          </div>
          <div className="card-block">
            <h4 className="card-title">Top List of Contributors</h4>
          </div>
          <ul className="contributor-list list-group list-group-flush">
          {this.state.contributors.map(contributor =>
            <li className="list-group-item" key={contributor.id}><img className="ui avatar image" src={contributor.avatar_url} /><span><a target="_blank" href={contributor.html_url}>{contributor.login}</a></span>
            <span className="contributions">{contributor.contributions}</span></li>
          )}
        </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Repository;