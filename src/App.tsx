import './app.scss';
import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppPage, AppState } from './app-state';

import { Navbar } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core/lib/esm/components';
import { MealPage } from './meal-page/meal-page';
import { TagsPage } from './tags-page/tags-page';

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
    case AppPage.TAGS:
      page = <TagsPage appState={appState} />;
      break;
  }

  return (
    <div className='app'>
      <div className='navbar-area'>
        <Navbar>
          <Navbar.Group>
            <Navbar.Heading>Meal Planner</Navbar.Heading>
            <Navbar.Divider />
            <Button minimal onClick={() => appState.changePage(AppPage.MEALS)}>
              Meals
            </Button>
            <Button minimal onClick={() => appState.changePage(AppPage.TAGS)}>
              Tags
            </Button>
            <Button minimal onClick={() => appState.changePage(AppPage.SETTINGS)}>
              Settings
            </Button>
          </Navbar.Group>
        </Navbar>
      </div>

      <div className='panels-area'>
        <div className='left-panel'>{page}</div>
        <div className='right-panel'>
          <Button icon='list' minimal />
        </div>
      </div>
    </div>
  );
});
