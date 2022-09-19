import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

const mapImages = (images) => images.map((image) => ({
  original: image,
  thumbnail: image,
  thumbnailLoading: 'lazy',
  originalWidth: '300px',
  originalHeight: '300px',
}));

export default function ImageViewer({ images }) {
  return (
    <ImageGallery
      items={mapImages(images)}
      showPlayButton={false}
      disableThumbnailScroll
      thumbnailPosition="right"
      onErrorImageURL="/no-image.svg"
      showThumbnails
      lazyLoad
    />
  );
}

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
