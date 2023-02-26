import './tags-page.scss';
import React from 'react';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';

interface TagsPageProps {
  appState: AppState;
}

export const TagsPage: React.FC<TagsPageProps> = observer(({ appState }) => {
  return <div className='tags-page'>tags</div>;
});
