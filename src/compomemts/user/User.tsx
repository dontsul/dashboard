import { ReactComponent as UserAvartar } from '../../assets/svg/Ellipse.svg';
import './user.scss';
export const User = () => {
  return (
    <div className="user">
      <UserAvartar className="user__avatar" />
      <div className="user__info">
        <h3 className="user__info__name">Evano</h3>
        <p className="user__info__position">Project Manager</p>
      </div>
    </div>
  );
};
