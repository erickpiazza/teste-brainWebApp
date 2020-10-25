import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BoxCounter from '../../components/BoxCounter';
import Container from '../../components/Container';
import { setSelectedAction } from '../../store/counter/actions';
import { RootState } from '../../store/rootReducer';

const Counters: React.FC = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.counters);
  const selectedCounter = useSelector((state: RootState) => state.counter.selectedCounter);

  return (
    <Container title="Counters">
      {counters?.map(counter => (
        <BoxCounter
          isSeleted={counter.id === selectedCounter}
          counterId={counter.id}
          counterValue={counter.value}
          key={counter.id}
          onPress={() => dispatch(setSelectedAction(counter.id))}
        />
      ))}
    </Container>
  );
};

export default Counters;
