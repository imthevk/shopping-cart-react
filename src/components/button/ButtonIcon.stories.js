import React from 'react';
import { storiesOf } from '@storybook/react';
import remove from 'assets/icons/remove.svg';
import ButtonIcon from './ButtonIcon';

storiesOf('ButtonIcon', module)
  .add('Remove', () => <ButtonIcon icon={remove} />)
  .add('Size', () => <ButtonIcon>L</ButtonIcon>);
