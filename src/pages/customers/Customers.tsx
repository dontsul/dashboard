import { Greetings } from '../../compomemts/greeting/Greetings';
import { CustomersBlock } from '../../compomemts/customersBlock/CustomersBlock';
import './customers.scss';

export const Customers = () => {
  return (
    <div className="customersPage">
      <Greetings />
      <CustomersBlock />
    </div>
  );
};
