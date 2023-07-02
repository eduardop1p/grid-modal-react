/* eslint-disable react/no-danger-with-children */

import { Container } from './styled';

interface Props {
  html: string;
}

export const TextComponent = ({ html }: Props) => {
  // a prop dangerouslySetInnerHTML do component styled vai injetar uma string html nela
  return <Container dangerouslySetInnerHTML={{ __html: html }} />;
};
