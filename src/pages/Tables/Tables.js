import React from 'react';
import { Container, Typography, Button, ButtonGroup } from '@material-ui/core';

import AgGrid from '../../components/ag-grid/AgGrid';
import MuiDataTable from '../../components/mui-datatable/mui-datatable';
import useStyles from './Tables.style';

const Tables = () => {
  const [activeComponent, setActiveComponent] = React.useState({
    name: 'agGrid',
    Component: AgGrid,
    buttonText: 'AG Grid',
    label: 'AG Grid - React w/ Material Theme'
  });

  const classes = useStyles();

  const BUTTON_CONSTANT = [
    {
      name: 'agGrid',
      Component: AgGrid,
      buttonText: 'AG Grid',
      label: 'AG Grid - React w/ Material Theme'
    },
    {
      name: 'muiDataTable',
      Component: MuiDataTable,
      buttonText: 'MUI Data Table',
      label: 'MUI DataTables - GregNB'
    }
  ];

  return (
    <Container>
      <Typography variant="h2">Data Grids</Typography>
      <Typography variant="body1">A collection of various data tables</Typography>

      <ButtonGroup>
        {BUTTON_CONSTANT.map((button) => (
          <Button variant="contained" onClick={() => setActiveComponent(button)}>
            {button.buttonText}
          </Button>
        ))}
      </ButtonGroup>

      <div className={classes.gridWrapper}>
        <Typography variant="h4">{activeComponent.label}</Typography>
        <activeComponent.Component />
      </div>
    </Container>
  );
};

export default Tables;
