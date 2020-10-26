import styled from 'styled-components/native';

export const BoxButton = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerBox = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxNotExistCounterSelected = styled.View`
  background: #0074b3;
  height: 124px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextNotExistCounterSelected = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #004266;
`;
