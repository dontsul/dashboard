import { HeaderCustomers } from './headerCustomers/HeaderCustomers';
import { BodyCustomers } from './bodyCustomers/BodyCustomers';
import { FooterCustomers } from './footerCustomers/FooterCustomers';

import './customersBlock.scss';

export const CustomersBlock = () => {
  return (
    <div className="customersBlock">
      <HeaderCustomers />
      <BodyCustomers />
      <FooterCustomers />
    </div>
  );
};
