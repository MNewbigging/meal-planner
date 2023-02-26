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
    <Dialog isOpen={appState.createMealDialogOpen} title='Add Meal' isCloseButtonShown={false}>
      <DialogBody>
        {appState.creatingMeal && (
          <div className='meal-edit-body'>
            <InputGroup
              placeholder='Meal name'
              value={appState.creatingMeal.name}
              onChange={(event) => (appState.creatingMeal.name = event.target.value)}
            />
          </div>
        )}
      </DialogBody>

      <DialogFooter>
        <div className='meal-edit-footer'>
          <Button minimal text='Cancel' onClick={appState.cancelCreateMeal} />
          <Button intent={Intent.PRIMARY} text='Add' onClick={appState.confirmCreateMeal} />
        </div>
      </DialogFooter>
    </Dialog>
  );
});
