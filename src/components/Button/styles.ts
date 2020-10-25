import styled from 'styled-components/native';

interface ButtonProps {
  width?: number;
  fontSize?: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${props => (props.width ? props.width : 45)}%;
  height: 60px;
  background: #fff;
  border-radius: 10px;
  margin-top: 16px;
  padding: 32px 16px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: #1f4b80;
  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  text-align: center;
  font-weight: bold;
`;
