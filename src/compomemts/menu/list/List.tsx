import { ItemList } from '../itemList/ItemList';

import { ReactComponent as Key } from '../../../assets/svg/key-square.svg';
import { ReactComponent as Square } from '../../../assets/svg/square.svg';
import { ReactComponent as Vector } from '../../../assets/svg/Vector.svg';
import { ReactComponent as Discount } from '../../../assets/svg/discount.svg';
import { ReactComponent as Message } from '../../../assets/svg/message.svg';
import { ReactComponent as Wallet } from '../../../assets/svg/wallet.svg';

export const List = () => {
  return (
    <ul>
      <ItemList text="Dashboard" element={Key} arrow={false} to="dashboard" />
      <ItemList text="Product" element={Square} arrow={true} to="product" />
      <ItemList text="Customers" element={Vector} arrow={true} to="customers" />
      <ItemList text="Income" element={Wallet} arrow={true} to="income" />
      <ItemList text="Promote" element={Discount} arrow={true} to="promote" />
      <ItemList text="Help" element={Message} arrow={true} to="help" />
    </ul>
  );
};
