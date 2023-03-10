import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => (
    <GalleryList>
        {images.map((image, index) => (
            <ImageGalleryItem
                onclick={onImageClick} image={image} key={index} />
        ))}
    </GalleryList>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};