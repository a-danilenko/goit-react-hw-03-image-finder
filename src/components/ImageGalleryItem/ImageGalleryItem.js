import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageObj, openModal }) => {
  return (
    <div className={s.ImageGalleryItem}>
      <img src={imageObj.webformatURL} alt="" className={s.ImageGalleryItemImage} onClick={() => {
        openModal(imageObj.largeImageURL);
      }} />
    </div>
    
  );
};

ImageGalleryItem.propTypes = {
  imageObj: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;