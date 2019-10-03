import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../src/components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

storiesOf('Header', module)
  .add('default', () => 
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );