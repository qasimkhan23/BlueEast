import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';



import Home from './pages/home';
import Create from './pages/create';
import List from './pages/list';

storiesOf('Biull Manager', module)
 
.add('home page', () => <Home/>)
.add('create page', () => <Create/>)
.add('List', () => <List/>);




 