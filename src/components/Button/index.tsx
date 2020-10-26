import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  width?: number;
  fontSize?: number;
  icon?: string;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({ children, width, fontSize, icon, iconSize, ...rest }) => (
  <Container width={width} {...rest}>
    {icon && <Icon name={icon} size={!iconSize ? 28 : iconSize} />}

    <ButtonText fontSize={fontSize}>{children} </ButtonText>
  </Container>
);

export default Button;
