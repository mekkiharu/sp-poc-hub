import { createStyles, makeStyles } from '@material-ui/styles';
import rootStyles from './root';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      ...rootStyles
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
