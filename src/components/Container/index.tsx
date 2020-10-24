import React from 'react';
import { ContainerStyle, ScrollStyle } from './styles';

const Container: React.FC = ({ children }) => (
  <ContainerStyle>
    <ScrollStyle>{children}</ScrollStyle>
  </ContainerStyle>
);

export default Container;
