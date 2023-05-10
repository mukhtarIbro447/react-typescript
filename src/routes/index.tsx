import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../components/Layout'





const Loadable = (Component: ElementType) => (props: any) => {

  return (
    <Suspense fallback={<div>loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Products = Loadable(lazy(() => import('../pages/Products')));

export default function Router() {
  return useRoutes([

    {
      path: 'layout',
      element: (
          <Layout />
       
      ),
      children: [
        { element: <Navigate to="home" replace />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <Products /> },
       
      ],
    },


    { path: '*', element: <Navigate to="/layout/home" replace /> },
  ]);
}
