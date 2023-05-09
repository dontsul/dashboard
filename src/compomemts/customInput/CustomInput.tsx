import { useState, FC, ChangeEvent, FunctionComponent, SVGProps } from 'react';
import './customInput.scss';

interface CustomInputProps {
  name: string;
  type: string;
  placeholder: string;
  element: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const CustomInput: FC<CustomInputProps> = ({
  element: Element,
  name,
  type,
  placeholder,
}) => {
  const [inputValue, setInputvalue] = useState('');

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value);
  };

  return (
    <div className="wrapInput">
      <input
        className="wrapInput__input"
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputValue}
      />
      <div className="wrapInput__search">
        <Element />
      </div>
    </div>
  );
};
