import React from 'react';
import {storiesOf} from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import BreadIcon from '../../../assets/icons/BreadIcon.svg';
import Cansicon from '../../../assets/icons/Cansicon.svg';
import Cheeseicon from '../../../assets/icons/Cheeseicon.svg';
import Drinkicon from '../../../assets/icons/Drinkicon.svg';
import Fishicon from '../../../assets/icons/Fishicon.svg';
import Fruitsicon from '../../../assets/icons/Fruitsicon.svg';
import Meaticon from '../../../assets/icons/Meaticon.svg';
import Salticon from '../../../assets/icons/Salticon.svg';
import Sweetsicon from '../../../assets/icons/Sweetsicon.svg';
import Vegetablesicon from '../../../assets/icons/Vegetablesicon.svg';


storiesOf('Atoms/ButtonIcon', module)
  .add('Bread Icon Active', () => <ButtonIcon icon={BreadIcon} active/>)
  .add('Cans Icon', () => <ButtonIcon icon={Cansicon} />)
  .add('Cheese Icon', () => <ButtonIcon icon={Cheeseicon} />)
  .add('Drink Icon', () => <ButtonIcon icon={Drinkicon} />)
  .add('Fish Icon', () => <ButtonIcon icon={Fishicon} />)
  .add('Fruits Icon', () => <ButtonIcon icon={Fruitsicon} />)
  .add('Meat Icon', () => <ButtonIcon icon={Meaticon} />)
  .add('Salt Icon', () => <ButtonIcon icon={Salticon} />)
  .add('Sweets Icon', () => <ButtonIcon icon={Sweetsicon} />)
  .add('Vegetables Icon', () => <ButtonIcon icon={Vegetablesicon} />)