import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getCustomers } from '../../../../features/slices/customersSlice';
import { ItemListCustomers } from '../itemListCustomers/ItemListCustomers';
import { HeaderTable } from '../headerTable/HeaderTable';

export const ListCustomers = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.customers);
  const { users } = useAppSelector((state) => state.customers);
  const [headerItem, setHeadreItem] = useState<string[]>([]);

  useEffect(() => {
    if (users.length !== 0) {
      const headreTable = Object.keys(users[0]);

      const transformedArr = headreTable.map((item) => {
        const words = item.split(/(?=[A-Z])/);
        const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        return capitalizedWords.join(' ');
      });

      setHeadreItem(transformedArr);
    }
  }, [users]);
  useEffect(() => {
    if (users.length !== 0) {
      return;
    }
    dispatch(getCustomers());
  }, [dispatch, users]);

  return (
    <div>
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
      <HeaderTable content={headerItem} />
      {users &&
        users.map((user) => {
          return <ItemListCustomers content={headerItem} key={user.email} user={user} />;
        })}
    </div>
  );
};
