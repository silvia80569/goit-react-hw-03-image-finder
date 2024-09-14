import React, { Component } from 'react';
import { Circles } from 'react-loader-spinner';
export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
      </div>
    );
  }
}