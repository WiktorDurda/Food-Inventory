import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
    .add('Input', () => <Input name="Nazwa produktu" width="200px"/>)
    .add('Input, default width', () => <Input name="Nazwa produktu"/>)