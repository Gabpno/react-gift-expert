import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;

        setCategories([category, ...categories]);
    };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onAddCategory={ onAddCategory }
        />

        {
            categories.map((category) =>
                <GifGrid category={ category } key={ category }/>
            )
        }
    </>
  );
};
