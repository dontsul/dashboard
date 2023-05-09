import { Sling as Hamburger } from 'hamburger-react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { handleMenu } from '../../features/slices/menuSlice';
import './burgerMenu.scss';

export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.menu);

  const handleClickMenu = () => {
    dispatch(handleMenu(!status));
  };
  return (
    <div onClick={handleClickMenu} className="burgerMenu">
      <Hamburger />
    </div>
  );
};
