import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  width?: number;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = ({ children, width, fontSize, ...rest }) => (
  <Container width={width} {...rest}>
    <ButtonText fontSize={fontSize}>{children} </ButtonText>
  </Container>
);

export default Button;
