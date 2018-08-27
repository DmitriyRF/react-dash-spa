import React, { Component } from 'react';

import Header from './Header';
import Row from './Row';
import './style.scss';

class CustomTable extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <table>
        <thead>
          <Header columns={columns} />
        </thead>
        <tbody>
          {data.map(row => {
            return <Row key={row.id} columns={columns} row={row} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default CustomTable;
