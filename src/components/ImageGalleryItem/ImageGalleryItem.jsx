import { Component } from 'react';
import './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, onClick } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={onClick}>
        <img src={webformatURL} alt="img" className="ImageGalleryItemImage" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
