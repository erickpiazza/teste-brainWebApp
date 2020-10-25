import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ContainerCounters, TitleCounters, ValueCounters } from './styles';

interface BoxCounterProps extends TouchableOpacityProps {
  counterId: number;
  counterValue: number;
  isSeleted: boolean;
}

const BoxCounter: React.FC<BoxCounterProps> = ({ counterId, counterValue, isSeleted, ...rest }) => {
  return (
    <ContainerCounters isSeleted={isSeleted} {...rest}>
      <TitleCounters>Counter {counterId}</TitleCounters>
      <ValueCounters> {counterValue}</ValueCounters>
    </ContainerCounters>
  );
};

export default BoxCounter;
