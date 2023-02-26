import './meal-create-dialog.scss';
import React from 'react';
import { Dialog, DialogBody, DialogFooter, Intent, InputGroup } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { Button } from '@blueprintjs/core';

interface MealEditProps {
  appState: AppState;
}

export const MealCreateDialog: React.FC<MealEditProps> = observer(({ appState }) => {
  return (
    <Dialog
      isOpen={appState.createMealOpen}
      onClose={appState.closeCreateMealDialog}
      canOutsideClickClose
      title='Add Meal'
    >
      <DialogBody>
        <div className='meal-edit-body'>
          <InputGroup placeholder='Meal name' />
        </div>
      </DialogBody>

      <DialogFooter>
        <div className='meal-edit-footer'>
          <Button minimal text='Cancel' />
          <Button intent={Intent.PRIMARY} text='Add' />
        </div>
      </DialogFooter>
    </Dialog>
  );
});
