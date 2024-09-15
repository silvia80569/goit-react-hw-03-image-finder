import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default class Button extends Component{
 render() {
    return (
      <button type="button" className={styles.Button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
