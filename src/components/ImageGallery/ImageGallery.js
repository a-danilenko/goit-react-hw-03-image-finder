import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const Gallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(imageObj => (
        <li key={imageObj.id}>
          <ImageGalleryItem imageObj={imageObj} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pageURL: PropTypes.string,
      type: PropTypes.string,
      tags: PropTypes.string,
      previewURL: PropTypes.string,
      previewWidt: PropTypes.number,
      previewHeigh: PropTypes.number,
      webformatURL: PropTypes.string,
      webformatWidt: PropTypes.number,
      webformatHeigh: PropTypes.number,
      largeImageURL: PropTypes.string,
      fullHDUR: PropTypes.string,
      imageUR: PropTypes.string,
      imageWidt: PropTypes.number,
      imageHeigh: PropTypes.number,
      imageSiz: PropTypes.number,
      views: PropTypes.number,
      downloads: PropTypes.number,
      favorites: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      user_id: PropTypes.number,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
    }).isRequired,
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;