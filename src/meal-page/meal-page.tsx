import './meal-page.scss';
import React from 'react';
import { Button, InputGroup, Intent, NonIdealState } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { MealCard } from '../meal-card/meal-card';
import { MealCreateDialog } from '../meal-create-dialog/meal-create-dialog';
import { Meal } from '../meal';
import { MealViewDialog } from '../meal-view-dialog/meal-view-dialog';

interface MealPageProps {
  appState: AppState;
}

export const MealPage: React.FC<MealPageProps> = observer(({ appState }) => {
  return (
    <div className='meal-page'>
      {/* Dialogs */}
      <MealCreateDialog appState={appState} />
      <MealViewDialog appState={appState} />

      <div className='action-area'>
        <Button
          icon='add'
          text='Add meal'
          intent={Intent.PRIMARY}
          onClick={appState.openCreateMealDialog}
        />
        <InputGroup
          className='search-input'
          placeholder='Search meals...'
          onChange={(event) => appState.searchMeals(event.target.value)}
        />
      </div>

      {!appState.visibleMeals.length && (
        <NonIdealState
          icon='clean'
          description='No meals here, why not make one now!'
          action={
            <Button
              icon='add'
              text='Add meal'
              intent={Intent.PRIMARY}
              onClick={appState.openCreateMealDialog}
            />
          }
        />
      )}

      {appState.visibleMeals.length > 0 && (
        <div className='meal-list'>
          {appState.visibleMeals.map((meal: Meal, index: number) => (
            <MealCard
              key={`meal-card-${index}`}
              meal={meal}
              onClick={() => appState.openViewMealDialog(meal)}
            />
          ))}
        </div>
      )}
    </div>
  );
});
