import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import { User } from '../user/User';
import { useAppSelector } from '../../app/hooks';

import './sidebar.scss';
export const Sidebar = () => {
  const { status } = useAppSelector((state) => state.menu);

  return (
    <aside className={`sidebar ${status ? 'activeSidebar' : ''}`}>
      <div>
        {' '}
        <Logo />
        <Menu />
      </div>
      <User />
    </aside>
  );
};
