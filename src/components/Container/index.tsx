import React from 'react';
import { ContainerStyle, ContainerTitle, ScrollStyle, Title } from './styles';

interface ContainerProps {
  title?: string;
}

const Container: React.FC<ContainerProps> = ({ children, title }) => (
  <ContainerStyle>
    {title && (
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
    )}

    <ScrollStyle>{children}</ScrollStyle>
  </ContainerStyle>
);

export default Container;
