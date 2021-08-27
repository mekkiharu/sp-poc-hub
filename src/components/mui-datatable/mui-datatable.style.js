import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        backgroundColor: 'black'
      }
    }
  }
}));
