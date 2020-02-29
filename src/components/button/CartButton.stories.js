import React from 'react';
import { storiesOf } from '@storybook/react';
import CartButton from './CartButton';

storiesOf('CartButton', module).add('Normal', () => <CartButton>Cart</CartButton>);
