import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('../views/Home'))
  },
  {
    path: '/refs-test',
    exact: true,
    component: React.lazy(() => import('../views/RefsTest'))
  },
  {
    path: '/set-state-test',
    exact: true,
    component: React.lazy(() => import('../views/SetStateTest'))
  },
  {
    path: '/hooks-test',
    exact: true,
    component: React.lazy(() => import('../views/HOOKSTest'))
  }
];

export default routes;