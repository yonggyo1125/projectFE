import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';
import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import MainClassContext from '../../modules/mainClass';

const CommonLayout = () => {
  const { mainClass } = useContext(MainClassContext);

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
