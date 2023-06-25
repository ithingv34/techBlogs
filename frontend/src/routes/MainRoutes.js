// project import
import Layout from 'components/layout';
import MainPage from 'pages/Main';

const MainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <MainPage />
    }
  ]
};

export default MainRoutes;
