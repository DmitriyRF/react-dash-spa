import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'Components/Layout';

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
      <Layout>
        <div>
          employees
          <Table columns={columnConfig} data={employees} />
        </div>
      </Layout>
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
