import './meal-page.scss';
import React from 'react';
import { InputGroup } from '@blueprintjs/core';
import { AppState } from '../AppState';
import { observer } from 'mobx-react-lite';
import { MealCard } from '../meal-card/MealCard';

interface MealPageProps {
  appState: AppState;
}

export const MealPage: React.FC<MealPageProps> = observer(({ appState }) => {
  return (
    <div className='meal-page'>
      <div className='search-area'>
        <InputGroup className='search-input' placeholder='Search meals...' />
      </div>
      <div className='meal-list'>
        {appState.meals.map((meal) => (
          <MealCard meal={meal} />
        ))}
      </div>
    </div>
  );
});
