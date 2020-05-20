import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextBlock.css';

export default class TextBlock extends Component {
  render() {
    const { file } = this.props;
    return (
      <p className='text-block'>{file.text}</p>
    );
  }
};

TextBlock.propTypes = {
  file: PropTypes.object.isRequired,
};