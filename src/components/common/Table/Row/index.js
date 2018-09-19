/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const { columns, row } = this.props;
    return (
      <tr>
        {columns.map((column, i) => (
          <td key={i}>{row[column.field] || ''}</td>
        ))}
      </tr>
    );
  }
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Row;
