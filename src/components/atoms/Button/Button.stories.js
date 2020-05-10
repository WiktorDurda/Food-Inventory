import React from 'react';
import {storiesOf} from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Normal', () => <Button>Add</Button>)
  .add('Negative', () => <Button negative>Cancel</Button>);
