import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { AppState } from './app-state';

const appState = new AppState();

const root = createRoot(document.getElementById('app-root'));

root.render(<App appState={appState} />);

if (module.hot) {
  module.hot.accept();
}
