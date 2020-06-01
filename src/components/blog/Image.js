import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageModal from 'components/blog/ImageModal';
import './Image.css';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
    };

    this.handleToggleImageModal = this.handleToggleImageModal.bind(this);
  }

  handleToggleImageModal() {
    const { showImageModal } = this.state;

    this.setState({
      showImageModal: !showImageModal,
    });
  }

  render() {
    const { caption, location, source, size } = this.props;
    const { showImageModal } = this.state;
    
    const captionClass = caption ? '' : 'no-caption';
    const imageClass = `${size} pic ${captionClass}`

    return (
      <div>
        <img src={source} className={imageClass} alt='pic' onClick={this.handleToggleImageModal} />
        {caption && <p className='caption'>{caption}</p>}
        <ImageModal
          caption={caption}
          handleCloseModal={this.handleToggleImageModal}
          title={location}
          modalImage={source}
          showImageModal={showImageModal}
        />
      </div>
    );
  }
};

Image.defaultProps = {
  size: 'md',
};

Image.propTypes = {
  caption: PropTypes.string,
  location: PropTypes.string.isRequired,
  source: PropTypes.node.isRequired,
  size: PropTypes.string,
};
