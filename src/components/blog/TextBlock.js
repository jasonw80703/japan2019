import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextBlock.css';

export default class TextBlock extends Component {
  render() {
    const { text } = this.props;
    return (
      <p className='text-block'>{text}</p>
    );
  }
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};