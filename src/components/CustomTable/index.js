import React, { Component } from 'react';

import CustomTableHead from './CustomTableHead';
import CustomTableRow from './CustomTableRow';
import './CustomTable.css';

class CustomTable extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <table>
        <thead>
          <CustomTableHead columns={columns} />
        </thead>
        <tbody>
          {data.map(row => {
            return <CustomTableRow key={row.id} columns={columns} row={row} />;
          })}
        </tbody>
      </table>
    );
  }
}
export default CustomTable;
