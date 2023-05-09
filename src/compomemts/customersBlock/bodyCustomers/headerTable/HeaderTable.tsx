import { FC } from 'react';
import './headerTable.scss';
interface HeaderTableProps {
  content: string[];
}

export const HeaderTable: FC<HeaderTableProps> = ({ content }) => {
  return (
    <div className="headerTable">
      {content &&
        content.map((elem) => {
          return (
            <div key={elem} className="headerTable__title">
              {elem}
            </div>
          );
        })}
    </div>
  );
};
