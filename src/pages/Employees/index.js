import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../../components/common/Table';
import * as companySelectors from '../../store/company/reducer';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const columns = [
      {
        field: 'fullName',
        title: 'Name'
      },
      {
        field: 'email',
        title: 'Email'
      },
      {
        field: 'level',
        title: 'Level'
      },
      {
        field: 'startDate',
        title: 'Start Date'
      },
      {
        field: null,
        title: 'Action'
      }
    ];
    this.state = { columns };
  }

  render() {
    const { columns } = this.state;
    const { employees } = this.props;
    return (
      <div>
        employees
        <Table columns={columns} data={employees} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const employees = companySelectors.getEmployees(state);
  return {
    employees
  };
}

export default connect(mapStateToProps)(Sidebar);
