import { ReactNode } from 'react';

import { Container } from './styled';

interface Props {
  children: ReactNode;
  background?: boolean;
}

export const SectionBackground = ({ children, background }: Props) => {
  return <Container $background={background}>{children}</Container>;
};
