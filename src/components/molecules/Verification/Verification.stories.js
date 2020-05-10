import React from 'react';
import {storiesOf} from '@storybook/react';
import Verification from './Verification';

storiesOf('Molecules/VerificationModal', module)
  .add('Confirm delete', () => <Verification />);
