import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function RouteWrapper({
  redirectTo,
  isPrivate,
  component: Component,
  ...rest
}) {
  const authenticated = window.localStorage.getItem('Mep:token');

  if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/login',
  isPrivate: false,
};

export default RouteWrapper;
