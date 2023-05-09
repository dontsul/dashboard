import { FC, FunctionComponent, SVGProps } from 'react';
import './square.scss';

interface SquareProps {
  element?: FunctionComponent<SVGProps<SVGSVGElement>>;
  content?: number | string;
  status: boolean;
  points: boolean;
}

export const Square: FC<SquareProps> = ({ content, element: Element, status, points }) => {
  return (
    <div
      className={`square ${status ? 'squareActive ' : 'squareInactive '} 
      ${points ? 'squarePoints' : ''}`}
    >
      {Element && <Element />}
      {content}
    </div>
  );
};
