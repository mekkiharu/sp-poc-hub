const RouteGuard = ({ component: Component, history }) => {
  return <Component history={history} />;
};

export default RouteGuard;
