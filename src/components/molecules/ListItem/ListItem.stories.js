import React from 'react';
import {storiesOf} from '@storybook/react';
import ListItem from './ListItem';


storiesOf('Molecules/ListItem', module)
  .add('Item', () => <ListItem name="Chleb" />)