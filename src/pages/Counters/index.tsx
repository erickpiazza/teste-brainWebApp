import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import { TestAction } from '../../store/counters/actions';

const Counters: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TestAction());
    console.log('useEffect executou');
  });

  return (
    <Container>
      <Text> Counters</Text>
    </Container>
  );
};

export default Counters;
