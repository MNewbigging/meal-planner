import './tags-page.scss';
import React from 'react';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { Button, InputGroup, Intent, NonIdealState } from '@blueprintjs/core';

interface TagsPageProps {
  appState: AppState;
}

export const TagsPage: React.FC<TagsPageProps> = observer(({ appState }) => {
  return (
    <div className='tags-page'>
      <div className='action-area'>
        <Button icon='add' text='Add tag' intent={Intent.PRIMARY} />
        <InputGroup className='search-input' placeholder='Search tags...' />
      </div>

      {!appState.tags.length && (
        <NonIdealState
          icon='clean'
          description='No tags here, why not make one now!'
          action={<Button icon='add' text='Add tag' intent={Intent.PRIMARY} />}
        />
      )}

      <div className='tags-list'></div>
    </div>
  );
});
