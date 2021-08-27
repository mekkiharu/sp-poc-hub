import { useState, useEffect } from 'react';

import MUIDataTable from 'mui-datatables';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

const MuiDataTable = () => {
  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTableSelectCell: {
          root: {
            backgroundColor: 'white'
          }
        }
      }
    });

  const columns = [
    {
      name: 'Make',
      options: {
        filter: true,
        setCellProps: () => ({ style: { whiteSpace: 'nowrap' } })
      }
    },
    {
      name: 'Model',
      options: {
        filter: true
      }
    },
    {
      name: 'Price',
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const [data, setData] = useState([]);

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    fixedHeader: true,
    fixedSelectColumn: true,
    tableBodyHeight: '400px',
    draggableColumns: { enabled: true },
    rowsPerPage: 2000,
    rowsPerPageOptions: [100, 1000, 2000]
  };

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((row) => setData(row.map((rowData) => [rowData.make, rowData.model, rowData.price])));
  }, []);

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title="Car List" data={data} columns={columns} options={options} />
      </MuiThemeProvider>
    </div>
  );
};

export default MuiDataTable;
