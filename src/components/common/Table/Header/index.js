/* eslint-disable react/no-array-index-key */
import React from 'react';

export default ({ columns }) => {
  return (
    <tr>
      {
        columns.map((column, i) => (
          <th key={i}>{column.title}</th>
        ))
      }
    </tr>
  );
};
