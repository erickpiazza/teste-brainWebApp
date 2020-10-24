import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TestAction } from '../../store/counters/actions';

const Counters: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TestAction());
    console.log('useEffect executou');
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#0082C9' }}>
      <Text> Counters</Text>
    </View>
  );
};

export default Counters;
