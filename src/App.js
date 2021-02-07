import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './components/Loader/Loader';
import api from './services/imageApi';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGalleryItem from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button'
import s from './App.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default class App extends Component {
  state = {
    keyWord: '',
    images: [],
    pageNumber: 1,
    isModalOpen: false,
    largeImageURL: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { keyWord, images } = this.state;
    if (prevState.keyWord !== keyWord) {
      this.setState({
        images: [],
      });
      this.fetchImages();
    }

    if (prevState.images !== images) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = query => {
    this.setState({
      keyWord: query,
      pageNumber: 1,
    });
  };

  fetchImages = () => {
    this.setState({
      isLoading: true,
    });

    api(this.state.keyWord, this.state.pageNumber)
      .then(images =>
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        })),
      )
      .catch(error => {
        this.setState({ error });
        toast.error('ОЙ );');
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  openModal = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { images, isLoading, isModalOpen, largeImageURL, error } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSearch={this.onSearch} />
        {images.length > 0 && (
          <ImageGalleryItem
            images={images}
            openModal={this.openModal}
          />
        )}

        {isLoading && <Loader />}
        {images.length > 0 && <Button onFetchImage={this.fetchImages} />}
        {isModalOpen && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
        )}
        {error && <ToastContainer />}
      </div>
    );
  }
}
