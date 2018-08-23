import React from 'react';

export default ({ columns }) => {
  return (
    <tr>

      {columns.map((column, i) => {
        return <th key={i}>{column.title}</th>;
      })}
    </tr>
  );
};
