import { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '45110089-61221fbae9d31eb168708c8b4';
const BASE_URL = 'https://pixabay.com/api/';
export default class App extends Component {

  state = {
    images: [],
    query: "",
    page: 1,
    loading: false,
    error: null,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      })
      .catch((error) => this.setState({ error: 'Failed to fetch images.' }))
      .finally(() => this.setState({ loading: false }));
  };
  handleSearchSubmit = (query) => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ modalImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ modalImage: null });
  };
  render() {
    const { images, error,loading,modalImage } = this.state;
  
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
         {error && <p>{error}</p>}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={this.handleLoadMore} />}
        {modalImage && <Modal largeImageURL={modalImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}
