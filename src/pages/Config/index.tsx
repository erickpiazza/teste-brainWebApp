import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BoxCounter from '../../components/BoxCounter';
import Button from '../../components/Button';
import Container from '../../components/Container';
import {
  addCounterAction,
  decrementCounterAction,
  deleteCounterAction,
  incrementCounterAction,
  resetCounterAction,
} from '../../store/counter/actions';
import { RootState } from '../../store/rootReducer';
import { BoxButton, Box, Title } from './styles';

const Config: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCounter = useSelector((state: RootState) => state.counter.selectedCounter);
  const counters = useSelector((state: RootState) => state.counter.counters);

  const RemoveCounter = (): void => {
    if (selectedCounter) {
      dispatch(deleteCounterAction(selectedCounter));
    } else {
      Alert.alert('Selecione um Contador');
    }
  };

  const handleIncrement = () => {
    if (selectedCounter) {
      dispatch(incrementCounterAction(selectedCounter));
    }
  };

  const handleDecrement = () => {
    if (selectedCounter) {
      dispatch(decrementCounterAction(selectedCounter));
    }
  };

  const handleReset = () => {
    if (selectedCounter) {
      dispatch(resetCounterAction(selectedCounter));
    }
  };

  return (
    <Container title="Config">
      <Box>
        <Title> Counters</Title>
        <BoxButton>
          <Button onPress={() => dispatch(addCounterAction())}>{`Add ${'\n'}Counter`}</Button>
          <Button onPress={RemoveCounter}>{`Remove ${'\n'} Counter`}</Button>
        </BoxButton>
      </Box>

      <Box>
        <Title> Selected Counter</Title>
        {counters
          .filter(item => item.id === selectedCounter)
          .map(counter => (
            <BoxCounter
              disabled
              isSeleted={counter.id === selectedCounter}
              counterId={counter.id}
              counterValue={counter.value}
              key={counter.id}
            />
          ))}
        <BoxButton>
          <Button fontSize={14} width={30} onPress={handleIncrement}>
            Adicionar
          </Button>
          <Button fontSize={14} width={30} onPress={handleReset}>
            Zerar
          </Button>
          <Button fontSize={14} width={30} onPress={handleDecrement}>
            Diminuir
          </Button>
        </BoxButton>
      </Box>
    </Container>
  );
};

export default Config;
