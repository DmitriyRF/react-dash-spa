/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const header = ({ columns }) => {
  return (
    <tr>
      {columns.map((column, i) => (
        <th key={i}>{column.title}</th>
      ))}
    </tr>
  );
};

header.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default header;
