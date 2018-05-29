import Home from '../components/Home';
import Profile from '../components/Profile';
import Login from '../components/Login';
import News from '../components/News';

const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    isExact: true,
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    isExact: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default routes;
