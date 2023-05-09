import { Sidebar } from '../compomemts/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from '../compomemts/burgerMenu/BurgerMenu';

import './layout.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <BurgerMenu />
      </header>
      <div className="sidebarWrap">
        <Sidebar />
      </div>
      <div className="bodyWrap">
        <Outlet />
      </div>
    </div>
  );
};
