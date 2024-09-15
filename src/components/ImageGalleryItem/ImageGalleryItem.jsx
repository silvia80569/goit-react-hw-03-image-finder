import { Component } from 'react';
import styles from'./ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, onClick } = this.props;
    return (
      <li className={styles.ImageGalleryItem} onClick={onClick}>
        <img src={webformatURL} alt="img" className={styles.ImageGalleryItemImage} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
