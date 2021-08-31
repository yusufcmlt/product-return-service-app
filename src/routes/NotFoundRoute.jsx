import React from 'react';
import { Redirect } from 'react-router';
import { HOMEPAGE } from './RouteContstants';

export default function NotFoundRoute() {
  return <Redirect to={HOMEPAGE} />;
}
