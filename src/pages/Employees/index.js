import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'Components/common/Table';
import { fetchEmployees } from './actions';
import { getEmployees } from './selectors';

import columnConfig from './config';

class Employee extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees } = this.props;
    return (
      <div>
        employees
        <Table columns={columnConfig} data={employees} />
      </div>
    );
  }
}

const mapStateToProps = state => getEmployees(state);

const mapDispatchToProps = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);
