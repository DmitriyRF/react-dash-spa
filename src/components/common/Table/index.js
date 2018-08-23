import React, { Component } from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './style.css';

class CustomTable extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <table>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        <tbody>
          {data.map(row => {
            return <TableRow key={row.id} columns={columns} row={row} />;
          })}
        </tbody>
      </table>
    );
  }
}
export default CustomTable;
