import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Checkout</Button>)
  .add('To cart', () => <Button color="grey">Your cart</Button>);
