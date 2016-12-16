import React, { Component } from 'react';
import Header from './header';
import Repository from './repository';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Repository />
      </div>
    );
  }
}
