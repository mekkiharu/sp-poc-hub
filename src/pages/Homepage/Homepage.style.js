import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  homeWrapper: {
    textAlign: 'center'
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: '$App-logo-spin infinite 20s linear'
    }
  },
  appHeader: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}));
