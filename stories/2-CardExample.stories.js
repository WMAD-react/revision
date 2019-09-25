import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardExample from '../src/cardExample';

storiesOf('Card', module)
  .add('default', () => 
    <CardExample 
      title='This is title' 
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    />)
