import React from 'react';
import {storiesOf} from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import LevelIndicator from './LevelIndicator';

storiesOf('Atoms/LevelIndicator', module)
  .add('Low', () => <LevelIndicator level={25} />)
  .add('Mid', () => <LevelIndicator level={47} />)
  .add('High', () => <LevelIndicator level={80} />)

