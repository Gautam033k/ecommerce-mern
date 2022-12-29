import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { CategoryItem } from './CategoryItem';

const Container = styled.div``;

export const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Container>
    </div>
  );
};
