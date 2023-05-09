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
          return (
            <div key={item} className="category__title">
              {item}
            </div>
          );
        })}
    </div>
  );
};
