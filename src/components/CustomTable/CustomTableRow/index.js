/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

class CustomTableHead extends Component {
  render() {
    const { columns, row } = this.props;
    return (
      <tr>
        {columns.map((column, i) => {
          return <td key={i}>{row[column.field] || ''}</td>;
        })}
      </tr>
    );
  }
}
export default CustomTableHead;
