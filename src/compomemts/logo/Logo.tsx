import { ReactComponent as LogoImg } from '../../assets/svg/logo.svg';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <a className="logo__link" href="!#">
        <LogoImg className="logo__image" />
        <span className="logo__text">
          Dashboard <span className="logo__version">v.01</span>
        </span>
      </a>
    </div>
  );
};
