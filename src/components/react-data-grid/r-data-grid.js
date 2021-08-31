import { useState, useMemo, useCallback } from 'react';
import DataGrid, { SelectColumn } from 'react-data-grid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableHeaderRenderer from './draggable-header-renderer';

import useStyles from './r-data-grid.style';

const _createRows = () => {
  const rows = [];

  for (let i = 1; i < 5000; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][Math.round(Math.random() * 3)],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.round(Math.random() * 3)],
      transactionType: ['Credit', 'Debit', 'Debt'][Math.round(Math.random() * 3)],
      account: ['Wilnas', 'Fediel', 'Gran'][Math.round(Math.random() * 3)],
      version: '1'
    });
  }

  return rows;
};

const RDataGrid = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(_createRows);
  const [selectedRows, setSelectedRows] = useState(() => new Set());
  const [columns, setColumns] = useState([
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      width: 80,
      frozen: true
    },
    {
      key: 'task',
      name: 'Title',
      width: 200
    },
    {
      key: 'priority',
      name: 'Priority',
      width: 150,
      frozen: true
    },
    {
      key: 'issueType',
      name: 'Issue Type',
      width: 150
    },
    {
      key: 'complete',
      name: '% Complete',
      width: 150
    },
    {
      key: 'transactionType',
      name: 'Transaction Type',
      width: 400
    },
    {
      key: 'version',
      name: 'Version',
      width: 100
    },
    {
      key: 'account',
      name: 'Account',
      width: 150
    }
  ]);
  const [sortColumns, setSortColumns] = useState([]);

  const _onSortColumnsChange = useCallback((_sortColumns) => {
    setSortColumns(_sortColumns);
  }, []);

  const _rowKeyGetter = (row) => {
    return row.id;
  };

  const _getComparator = (sortColumn) => {
    if (sortColumn === 'make' || sortColumn === 'model') {
      return (a, b) => a[sortColumn].localeCompare(b[sortColumn]);
    } else {
      return (a, b) => a[sortColumn] - b[sortColumn];
    }
  };

  const _sortedRows = useMemo(() => {
    if (sortColumns.length === 0) return rows;

    const sortedRows = [...rows];

    sortedRows.sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = _getComparator(sort.columnKey);
        const compResult = comparator(a, b);

        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }

      return 0;
    });

    return sortedRows;
  }, [rows, sortColumns]);

  const _draggableColumns = useMemo(() => {
    const HeaderRenderer = (props) => <DraggableHeaderRenderer {...props} onColumnsReorder={_handleColumnsReorder} />;

    const _handleColumnsReorder = (sourceKey, targetKey) => {
      const sourceColumnIndex = columns.findIndex((c) => c.key === sourceKey);
      const targetColumnIndex = columns.findIndex((c) => c.key === targetKey);
      const reorderedColumns = [...columns];

      reorderedColumns.splice(targetColumnIndex, 0, reorderedColumns.splice(sourceColumnIndex, 1)[0]);

      setColumns(reorderedColumns);
    };

    return columns.map((c) => {
      // disable dragging on the follow columns
      if (c.key === 'select-row' || c.key === 'id' || c.frozen) return c;

      return { ...c, headerRenderer: HeaderRenderer };
    });
  }, [columns]);

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <DataGrid
          className={classes.gridContainer}
          defaultColumnOptions={{ sortable: true, resizable: true }}
          rowKeyGetter={_rowKeyGetter}
          columns={_draggableColumns}
          rows={_sortedRows}
          onRowsChange={setRows}
          sortColumns={sortColumns}
          onSortColumnsChange={_onSortColumnsChange}
          selectedRows={selectedRows}
          onSelectedRowsChange={setSelectedRows}
        />
      </DndProvider>
    </div>
  );
};

export default RDataGrid;
