import './tags-page.scss';
import React from 'react';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { Button, InputGroup, Intent, NonIdealState, Tag } from '@blueprintjs/core';
import { MealTag } from '../meal-tag';
import { TagCreateDialog } from '../tag-create-dialog/tag-create-dialog';

interface TagsPageProps {
  appState: AppState;
}

export const TagsPage: React.FC<TagsPageProps> = observer(({ appState }) => {
  return (
    <div className='tags-page'>
      <TagCreateDialog appState={appState} />

      <div className='action-area'>
        <Button
          icon='add'
          text='Add tag'
          intent={Intent.PRIMARY}
          onClick={appState.openCreateTagDialog}
        />
        <InputGroup className='search-input' placeholder='Search tags...' />
      </div>

      {!appState.tags.length && (
        <NonIdealState
          icon='clean'
          description='No tags here, why not make one now!'
          action={<Button icon='add' text='Add tag' intent={Intent.PRIMARY} />}
        />
      )}

      {appState.tags.length > 0 && (
        <div className='tags-list'>
          {appState.tags.map((tag: MealTag) => (
            <Tag key={tag.id} style={{ backgroundColor: `${tag.color}` }}>
              {tag.name}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
});
