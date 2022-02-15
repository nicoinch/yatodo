import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import '../src/index.css';

addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
