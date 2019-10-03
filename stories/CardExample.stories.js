import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardExample from '../src/components/cardExample';

storiesOf('Card', module)
  .add('default', () => 
    <CardExample
      image="https://ichef.bbci.co.uk/news/660/cpsprodpb/3DAD/production/_104898751_gettyimages-844466808.jpg"
      title='This is title' 
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    />
  )
  .add('no text', () => 
  <CardExample 
    image="https://ichef.bbci.co.uk/news/660/cpsprodpb/3DAD/production/_104898751_gettyimages-844466808.jpg"
    title='This is exmaple 2' 
  />
  )
  .add('no image', () => 
    <CardExample 
      title='This is exmaple 2' 
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    />
    )
