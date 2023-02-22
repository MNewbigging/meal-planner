import './meal-card.scss';
import React from 'react';
import { Meal } from '../types';
import { observer } from 'mobx-react-lite';
import { Card } from '@blueprintjs/core';

interface MealCardProps {
  meal: Meal;
}

export const MealCard: React.FC<MealCardProps> = observer(({ meal }) => {
  const { name } = meal;

  return <Card className='meal-card'>{name}</Card>;
});
