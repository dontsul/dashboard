import { FC } from 'react';
import { ICustomer } from '../../../../features/slices/customersSlice';
import { StatusBlock } from '../statusBlock/StatusBlock';
import { Category } from '../category/Category';
import './itemListCustomers.scss';

interface CustomerProps {
  user: ICustomer;
  content: string[];
}

export const ItemListCustomers: FC<CustomerProps> = ({ user, content }) => {
  const { customerName, company, phoneNumber, email, country, status } = user;

  return (
    <div className="wratCustomer">
      <Category content={content} />
      <div className="customer">
        <div>{customerName}</div>
        <div>{company}</div>
        <div>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>
        <div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="customer__country">{country}</div>
        <div className="customer__status">
          <StatusBlock status={status} />
        </div>
      </div>
    </div>
  );
};
