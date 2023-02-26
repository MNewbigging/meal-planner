import './meal-edit.scss';
import React from 'react';
import { Dialog, DialogBody, DialogFooter, Intent } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { Button } from '@blueprintjs/core';

interface MealEditProps {
  appState: AppState;
}

export const MealEdit: React.FC<MealEditProps> = observer(({ appState }) => {
  return (
    <Dialog
      isOpen={appState.mealEditOpen}
      onClose={appState.cancelMealEdit}
      canOutsideClickClose
      title='Add Meal'
    >
      <DialogBody>
        <div className='meal-edit-body'></div>
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
