import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          {data.map((row, i) => {
            return <Row key={row.id + i} columns={columns} row={row} />;
          })}
        </tbody>
      </table>
    );
  }
}

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CustomTable;
