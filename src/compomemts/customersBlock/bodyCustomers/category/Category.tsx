import { FC } from 'react';
import './category.scss';
interface CategoryProps {
  content: string[];
}

export const Category: FC<CategoryProps> = ({ content }) => {
  return (
    <div className="category">
      {content &&
        content.map((item) => {
          return <div className="category__title">{item}</div>;
        })}
    </div>
  );
};
