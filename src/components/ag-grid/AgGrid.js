import { useState } from 'react';

import { AgGridReact, AgGridColumn } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
const AgGrid = () => {
  const [gridApi, setGridApi] = useState();
  const [, setGridColumnApi] = useState();
  const [rowData, setRowData] = useState([]);

  // NO SONAR
  // const _isFirstColumn = (params) => {
  //   const displayedColumns = params.columnApi.getAllDisplayedColumns();
  //   return displayedColumns[0] === params.column;
  // };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((result) => result.json())
      .then((row) => updateData(row));
  };

  const _onFirstDataRendered = () => {
    gridApi.sizeColumnsToFit();
  };

  return (
    <div className="ag-theme-material" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        defaultColDef={{
          width: 120,
          minWidth: 120,
          sortable: true,
          sortingOrder: ['asc', 'desc']
        }}
        rowData={rowData}
        onGridReady={onGridReady}
        onFirstDataRendered={_onFirstDataRendered}
        rowSelection="multiple"
        suppressRowClickSelection
      >
        <AgGridColumn
          field=""
          suppressAutoSize={true}
          sortable={false}
          maxWidth={70}
          headerCheckboxSelection
          checkboxSelection
          suppressMovable
          pinned
          lockPinned
          lockPosition
          lockVisible
        />
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
      </AgGridReact>
    </div>
  );
};

export default AgGrid;
