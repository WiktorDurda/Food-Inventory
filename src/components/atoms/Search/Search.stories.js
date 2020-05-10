import React from 'react';
import {storiesOf} from '@storybook/react';
import Search from './Search';

storiesOf('Atoms/Search', module)
  .add('Search Input', () => <Search placeholder="Search" />)