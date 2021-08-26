import React from 'react';
import { Container, Typography } from '@material-ui/core';

import AgGrid from '../../components/ag-grid/AgGrid';
import useStyles from './Tables.style';

const Tables = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h2">Data Grids</Typography>
      <Typography variant="body1">A collection of various data tables</Typography>

      <div className={classes.gridWrapper}>
        <Typography variant="h4">AG Grid - React w/ Material Theme</Typography>
        <AgGrid />
      </div>
    </Container>
  );
};

export default Tables;
