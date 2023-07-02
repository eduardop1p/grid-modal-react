import { Container, Html } from './styled';
import { SectionBackground } from '../section-background';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';

interface Props {
  title: string;
  html: string;
  background?: boolean;
}

export const GridContent = ({ title, html, background = false }: Props) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase colorDarke={!background} as="h2">
          {title}
        </Heading>
        <Html>
          <TextComponent html={html} />
        </Html>
      </Container>
    </SectionBackground>
  );
};
