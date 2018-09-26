/* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const InputGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className={`input-group ${error ? ' has-error' : ''}`}>
      <label className="input-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className="input"
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

InputGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: 'text',
  error: ''
};

export default InputGroup;
