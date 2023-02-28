import './meal-view-dialog.scss';
import React from 'react';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  Icon,
  Intent,
  Slider,
} from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { Popover2 } from '@blueprintjs/popover2';

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
            <h2 className='bp4-heading'>{meal.name}</h2>
          </div>
        )}
      </DialogBody>
      <DialogFooter>
        <div className='meal-view-dialog-footer'>
          <p>Drag the slider to the right to delete this meal permanently.</p>
          <div className='slider-wrapper'>
            <Slider
              showTrackFill
              intent={appState.getDeleteSliderIntent()}
              stepSize={1}
              initialValue={0}
              max={100}
              labelRenderer={false}
              value={appState.deleteSliderValue}
              onChange={appState.setDeleteSliderValue}
              onRelease={(value: number) => appState.onReleaseDeleteSlider(value, meal.id)}
            />
            <Icon icon='trash' />
          </div>
        </div>
      </DialogFooter>
    </Dialog>
  );
});
