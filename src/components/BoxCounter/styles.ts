import styled from 'styled-components/native';

interface ContainerCountersProps {
  isSeleted?: boolean;
}

export const ContainerCounters = styled.TouchableOpacity<ContainerCountersProps>`
  border-width: 2px;
  border-color: #1f4b80;
  background: ${props => (props.isSeleted ? '#f2f2f2' : '#6281a6')};
  width: 100%;
  border-radius: 8px;

  padding: 8px;
  padding-bottom: 18px;

  align-items: center;
  justify-content: space-between;

  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const TitleCounters = styled.Text`
  width: 100%;
  text-align: left;
  font-size: 18px;
  margin-bottom: 8px;
`;
export const ValueCounters = styled.Text`
  width: 100%;
  text-align: right;
  font-size: 34px;
  font-weight: bold;
`;
