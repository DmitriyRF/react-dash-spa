import React from 'react';

import Table from '../../components/common/Table';

export default () => {
  const data = [
    {
      id: 1,
      fullName: 'Ivan Ivanov',
      email: 'ivan@epam.com',
      level: 'junior',
      startDate: '2018-08-10'
    },
    {
      id: 2,
      fullName: 'Petr Petrov',
      email: 'petr@epam.com',
      level: 'junior',
      startDate: '2018-08-11'
    },
    {
      id: 3,
      fullName: 'Gena genov',
      email: 'gena@epam.com',
      level: 'senior',
      startDate: '2014-08-11'
    }
  ];
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
  return (
    <div>
      employees
      <Table columns={columns} data={data} />
    </div>
  );
};
