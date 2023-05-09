import { Pagination } from '../../pagination/Pagination';

import './footerCustomers.scss';

export const FooterCustomers = () => {
  return (
    <div className="footerCustomers">
      <div className="footerCustomers__text">Showing data 1 to 8 of 256K entries</div>
      <Pagination />
    </div>
  );
};
