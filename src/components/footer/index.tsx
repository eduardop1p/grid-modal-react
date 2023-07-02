import { Container } from './styled';
import { TextComponent } from '../text-component';
import { SectionContainer } from '../section-container';

interface Props {
  html: string;
}

export const Footer = ({ html }: Props) => {
  return (
    <SectionContainer>
      <Container>
        <TextComponent html={html} />
      </Container>
    </SectionContainer>
  );
};
