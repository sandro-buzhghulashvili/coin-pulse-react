import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import classes from './Layout.module.css';

import MainNavbar from '../components/MainNavbar';
import LoadingPage from '../components/LoadingPage';
import Footer from '../components/Footer';

const LayoutPage = () => {
  const navigation = useNavigation();
  return (
    <div className={classes.layout}>
      <MainNavbar />
      {navigation.state === 'loading' ? <LoadingPage /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default LayoutPage;
