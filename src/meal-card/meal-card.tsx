import './meal-card.scss';
import React from 'react';
import { Meal } from '../meal';
import { observer } from 'mobx-react-lite';
import { Card } from '@blueprintjs/core';

interface MealCardProps {
  meal: Meal;
  onClick: () => void;
}

export const MealCard: React.FC<MealCardProps> = observer(({ meal, onClick }) => {
  const { name } = meal;

  return (
    <Card interactive className='meal-card' onClick={onClick}>
      {name}
    </Card>
  );
});
