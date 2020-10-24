import React from 'react';
import { Alert, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { addCounterAction, deleteCounterAction } from '../../store/counters/actions';
import { RootState } from '../../store/rootReducer';
import { BoxButton, ContainerButton, ContainerButtonTitle } from './styles';

const Config: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCounter = useSelector((state: RootState) => state.counter.selectedCounter);

  const RemoveCounter = (): void => {
    if (selectedCounter) {
      dispatch(deleteCounterAction(selectedCounter));
    } else {
      Alert.alert('Selecione um Contador');
    }
  };

  return (
    <Container>
      <Text> Config</Text>
      <ContainerButton>
        <ContainerButtonTitle> Counters</ContainerButtonTitle>
        <BoxButton>
          <Button onPress={() => dispatch(addCounterAction())}>{`Add ${'\n'}Counter`}</Button>
          <Button onPress={RemoveCounter}>{`Remove ${'\n'} Counter`}</Button>
        </BoxButton>
      </ContainerButton>
    </Container>
  );
};

export default Config;
