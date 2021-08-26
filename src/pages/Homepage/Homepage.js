import logo from '../../logo.svg';
import { Typography, Button } from '@material-ui/core';
import useStyles from './Homepage.style';

const Homepage = (props) => {
  const classes = useStyles();

  const _handleRedirect = () => {
    props.history.push('/tables');
  };

  return (
    <div className={classes.homeWrapper}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <Typography style={{ marginBottom: '1rem' }} variant="h3">
          Saionji-Project: Proof of Concept Hub
        </Typography>
        <Button variant="contained" color="primary" onClick={_handleRedirect}>
          See Components
        </Button>
      </header>
    </div>
  );
};

export default Homepage;
