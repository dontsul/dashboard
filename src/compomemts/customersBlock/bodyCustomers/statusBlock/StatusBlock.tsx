import { FC } from 'react';

import './statusBlock.scss';

interface IStatusBlock {
  status: string;
}

export const StatusBlock: FC<IStatusBlock> = ({ status }) => {
  return (
    <div className={`statusBlock  ${status === 'Active' ? `activeStatus` : `inactiveStatus`}`}>
      {status}
    </div>
  );
};
