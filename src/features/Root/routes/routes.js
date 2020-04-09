import { withLazyLoad } from '../../_shared/hocs';

export const routes = [
  {
    routeName: 'Home',
    isExact: true,
    path: '/',
    component: withLazyLoad(() => import('../../Home/Home.js')),
  },
];

export const refs = [
  {
    routeName: 'Home',
    ref: 'infoRef',
  },
  {
    routeName: 'About Me',
    ref: 'aboutRef',
  },
  {
    routeName: 'Work',
    ref: 'projectsRef',
  },
  {
    routeName: 'Experience',
    ref: 'workRef',
  },
];
