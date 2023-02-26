import './meal-page.scss';
import React from 'react';
import { Button, InputGroup, NonIdealState } from '@blueprintjs/core';
import { AppState } from '../app-state';
import { observer } from 'mobx-react-lite';
import { MealCard } from '../meal-card/meal-card';
import { MealCreateDialog } from '../meal-create-dialog/meal-create-dialog';
import { Meal } from '../meal';

interface MealPageProps {
  appState: AppState;
}

export const MealPage: React.FC<MealPageProps> = observer(({ appState }) => {
  return (
    <div className='meal-page'>
      {/* Dialogs */}
      <MealCreateDialog appState={appState} />

      <div className='action-area'>
        <Button icon='add' text='Add meal' onClick={appState.openCreateMealDialog} />
        <InputGroup className='search-input' placeholder='Search meals...' />
      </div>

      {!appState.meals.length && (
        <NonIdealState
          icon='clean'
          description='You have no meals, why not make one now!'
          action={<Button icon='add' text='Add meal' onClick={appState.openCreateMealDialog} />}
        />
      )}
      <div className='meal-list'>
        {appState.meals.map((meal: Meal, index: number) => (
          <MealCard key={`meal-card-${index}`} meal={meal} />
        ))}
      </div>
    </div>
  );
});
