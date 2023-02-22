import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppPage, AppState } from './AppState';

import { Navbar } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core/lib/esm/components';
import { MealPage } from './meal-page/MealPage';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  // Which page are we on
  let page: JSX.Element;
  switch (appState.page) {
    case AppPage.MEALS:
      page = <MealPage appState={appState} />;
      break;
  }

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

      {page}
    </>
  );
});
