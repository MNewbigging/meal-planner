import './tag-create-dialog.scss';
import React from 'react';
import { Button, Dialog, DialogBody, DialogFooter, InputGroup, Intent } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';

interface TagCreateProps {
  appState: AppState;
}

export const TagCreateDialog: React.FC<TagCreateProps> = observer(({ appState }) => {
  return (
    <Dialog isOpen={appState.createTagDialogOpen} title='Add Tag' isCloseButtonShown={false}>
      <DialogBody>
        {appState.creatingTag && (
          <div className='tag-create-body'>
            <InputGroup
              placeholder='Tag name'
              value={appState.creatingTag.name}
              onChange={(event) => appState.creatingTag.setName(event.target.value)}
            />
          </div>
        )}
      </DialogBody>

      <DialogFooter>
        <div className='tag-create-footer'>
          <Button minimal text='Cancel' onClick={appState.cancelCreateTag} />
          <Button intent={Intent.PRIMARY} text='Add' onClick={appState.confirmCreateTag} />
        </div>
      </DialogFooter>
    </Dialog>
  );
});
