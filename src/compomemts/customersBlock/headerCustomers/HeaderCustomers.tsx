import { CustomInput } from '../../customInput/CustomInput';
import { ReactComponent as Search } from '../../../assets/svg/search.svg';
import './headerCustomers.scss';

export const HeaderCustomers = () => {
  return (
    <div className="headerCustomers">
      <div className="wrapTitle">
        <h2 className="wrapTitle__title">All Customers</h2>
        <div className="wrapTitle__description">Active Members</div>
      </div>

      <div>
        <CustomInput name="search" type="search" placeholder="Search" element={Search} />
      </div>
    </div>
  );
};
