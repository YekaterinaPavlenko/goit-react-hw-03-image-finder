import React, { Component } from 'react';
import igs from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {};
  render() {
    const { gallery } = this.props;
    return (
      <ul className={igs.ImageGallery}>
        {gallery.map(item => {
          //   console.log(item);
          const { id, webformatURL, tags } = item;
          return <ImageGalleryItem key={id} image={webformatURL} tags={tags} />;
        })}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  //   deleteContact: PropTypes.func.isRequired,
};
export default ImageGallery;
