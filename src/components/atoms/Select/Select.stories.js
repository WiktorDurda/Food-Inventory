import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import categories from '../../../data/categories';

storiesOf('Atoms/Select', module)
  .add('Select', () => (
    <Select name="Kategoria" width="200px">
      <option value="Category name">Category name</option>
    </Select>
  ))
  .add('All Category', () => (
    <Select name="Kategoria" width="200px">
      {categories.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </Select>
  ));
