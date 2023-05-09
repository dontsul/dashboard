import { FC, FunctionComponent, SVGProps } from 'react';

import { ReactComponent as Arrow } from '../../../assets/svg/arrow.svg';
import { NavLink } from 'react-router-dom';
import './itemList.scss';

interface ItemListProps {
  text: string;
  element: FunctionComponent<SVGProps<SVGSVGElement>>;
  arrow: boolean;
  to: string;
}

export const ItemList: FC<ItemListProps> = ({ element: Element, text, arrow, to }) => {
  return (
    <li>
      <NavLink to={`/${to}`} className={' item '}>
        <div className="item__title">
          <div className="item__svg">
            <Element />
          </div>
          <span className="item__text">{text}</span>
        </div>
        {arrow && (
          <div className="item__arrow">
            <Arrow />
          </div>
        )}
      </NavLink>
    </li>
  );
};
