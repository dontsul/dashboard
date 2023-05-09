import { Square } from './square/Square';
import { ReactComponent as Left } from '../../assets/svg/_ (1).svg';
import { ReactComponent as Right } from '../../assets/svg/_ (2).svg';
import './pagination.scss';

export const Pagination = () => {
  return (
    <div className="pagination">
      <Square status={false} element={Left} points={false} />
      <Square status={true} content={1} points={false} />
      <Square status={false} content={2} points={false} />
      <Square status={false} content={3} points={false} />
      <Square status={false} content={4} points={false} />
      <Square status={false} content={'...'} points={true} />
      <Square status={false} content={40} points={false} />
      <Square status={false} element={Right} points={false} />
    </div>
  );
};
