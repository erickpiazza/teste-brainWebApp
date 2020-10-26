import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import BoxCounter from '../../components/BoxCounter';
import Container from '../../components/Container';
import { setSelectedAction } from '../../store/counter/actions';
import { RootState } from '../../store/rootReducer';
import { TextAlert } from './styles';

const Counters: React.FC = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter.counters);
  const selectedCounter = useSelector((state: RootState) => state.counter.selectedCounter);

  const counterRender = () => {
    if (counters.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="alert-octagon" size={62} color="#FF9500" />
          <TextAlert>Não existe contadores no momento</TextAlert>
        </View>
      );
    }
    return (
      <ScrollView>
        {counters?.map(counter => (
          <BoxCounter
            isSeleted={counter.id === selectedCounter}
            counterId={counter.id}
            counterValue={counter.value}
            key={counter.id}
            onPress={() => dispatch(setSelectedAction(counter.id))}
          />
        ))}
      </ScrollView>
    );
  };

  return <Container title="Counters">{counterRender()}</Container>;
};

export default Counters;
