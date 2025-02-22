import * as React from 'react';
import { DataGrid, GridColumnMenu, GridColumnMenuProps } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function CustomColumnMenu(props: GridColumnMenuProps) {
  return (
    <GridColumnMenu
      {...props}
      components={{
        // Hide `ColumnMenuColumnsItem`
        ColumnMenuColumnsItem: null,
      }}
    />
  );
}

export default function HideColumnMenuGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 5,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} slots={{ columnMenu: CustomColumnMenu }} />
    </div>
  );
}
