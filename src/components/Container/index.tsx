import React from 'react';

import { ContainerContent, ContainerStyle, ContainerTitle, Title } from './styles';

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

    <ContainerContent>{children}</ContainerContent>
  </ContainerStyle>
);

export default Container;
