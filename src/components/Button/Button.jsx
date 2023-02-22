import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, onClick, type, disabled }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button className={`btn ${type}`} type={`${type}`} onClick={handleClick} disabled={disabled}>{text}</button>
  );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    className: 'btn default',
    onClick: null,
    disabled: false,
};

export default Button;
