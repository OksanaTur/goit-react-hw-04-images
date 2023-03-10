import propTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onclick }) => (
    <GalleryItem id={image.id} onClick={onclick}>
        <GalleryImage
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}/>
    </GalleryItem>
)

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};