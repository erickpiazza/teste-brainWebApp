import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import { setSelectedAction, testAction } from '../../store/counters/actions';
import { RootState } from '../../store/rootReducer';
import { ContainerCounters, TitleCounters, ValueCounters } from './styles';

const Counters: React.FC = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.counters);
  const selectedCounter = useSelector((state: RootState) => state.counter.selectedCounter);

  return (
    <Container>
      <Text> Counters</Text>

      {counters.map(counter => (
        <ContainerCounters onPress={() => dispatch(setSelectedAction(counter.id))} key={counter.id} isSeleted={counter.id === selectedCounter}>
          <TitleCounters>Counter {counter.id}</TitleCounters>
          <ValueCounters> 0001</ValueCounters>
        </ContainerCounters>
      ))}
    </Container>
  );
};

export default Counters;
