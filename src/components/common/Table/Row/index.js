/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

class Row extends Component {
  render() {
    const { columns, row } = this.props;
    return (
      <tr>
        {
          columns.map((column, i) => (
            <td key={i}>{row[column.field] || ''}</td>
          ))
        }
      </tr>
    );
  }
}

export default Row;
