import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageModal from 'components/blog/ImageModal';
import FetchingImagesSpinner from 'components/blog/FetchingImagesSpinner';
import './Image.scss';
import { Preload } from 'react-preload'; // known bug with react-preload

const Image = ({ caption, location, source, size }) => {
  const [showImageModal, handleToggleImageModal] = useState(false);

  const captionClass = caption ? '' : 'no-caption';
  const imageClass = `${size} pic ${captionClass}`;

  return (
    <Preload
      loadingIndicator={<FetchingImagesSpinner />}
      images={[source]}
    >
      <img src={source} className={imageClass} alt='pic' onClick={() => handleToggleImageModal(!showImageModal)} />
      {caption && <p className='caption'>{caption}</p>}
      <ImageModal
        caption={caption}
        handleCloseModal={() => handleToggleImageModal(!showImageModal)}
        title={location}
        modalImage={source}
        showImageModal={showImageModal}
      />
    </Preload>
  );
}

Image.defaultProps = {
  size: 'md',
};

Image.propTypes = {
  caption: PropTypes.string,
  location: PropTypes.string.isRequired,
  source: PropTypes.node.isRequired,
  size: PropTypes.string,
};

export default Image;