import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';

import './app.scss';
import { Navbar } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core/lib/esm/components';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <>
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>Meal Planner</Navbar.Heading>
          <Navbar.Divider />
          <Button minimal>Meals</Button>
          <Button minimal>Ingredients</Button>
          <Button minimal>Tags</Button>
          <Button minimal>Settings</Button>
        </Navbar.Group>
      </Navbar>
    </>
  );
});
