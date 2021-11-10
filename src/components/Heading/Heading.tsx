import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ text, ...props }) => <h1 {...props}>{text}</h1>;

Heading.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  text: PropTypes.string.isRequired
};