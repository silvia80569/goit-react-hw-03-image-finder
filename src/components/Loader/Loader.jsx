import React, { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';
export default class Loader extends Component {
  render() {
    return (
      <div className={styles.Loader}>
        <Circles height="50" width="50" color="#ffffff" ariaLabel="loading" />
      </div>
    );
  }
}