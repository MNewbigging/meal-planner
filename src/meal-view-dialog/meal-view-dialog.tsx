import './meal-view-dialog.scss';
import React from 'react';
import { Button, ButtonGroup, Dialog, DialogBody, DialogFooter, Intent } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';

interface MealViewDialogProps {
  appState: AppState;
}

export const MealViewDialog: React.FC<MealViewDialogProps> = observer(({ appState }) => {
  const meal = appState.mealToView;

  return (
    <Dialog
      isOpen={appState.viewMealDialogOpen}
      title={'View Meal'}
      onClose={appState.closeViewMealDialog}
      canEscapeKeyClose
      canOutsideClickClose
    >
      <DialogBody>
        {meal && (
          <div className='meal-view-dialog-body'>
            <div className='action-bar'>
              <ButtonGroup>
                <Button icon='edit' text='Edit' />
                <Button icon='add-to-artifact' text='Add to list' />
              </ButtonGroup>
            </div>

            <h2 className='bp4-heading'>{meal.name}</h2>
          </div>
        )}
      </DialogBody>
      <DialogFooter>
        <div className='meal-view-dialog-footer'>
          <Button text='Delete' intent={Intent.DANGER} />
        </div>
      </DialogFooter>
    </Dialog>
  );
});
