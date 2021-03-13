import React from "react";
import gis from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, tags }) => {
  //   console.log(image);
  return (
    <li className={gis.ImageGalleryItem}>
      <img src={image} alt={tags} className={gis.image} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  //   getGotoForModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
