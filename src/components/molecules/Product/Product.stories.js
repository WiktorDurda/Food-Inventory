import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './Product';

storiesOf('Molecules/Product', module)
  .add('Product Item', () => <Product />)