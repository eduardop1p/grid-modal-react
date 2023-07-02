import { ReactNode } from 'react';

import { Container, TextContainer, ImageContainer, Image } from './styled';
import { SectionBackground } from '../section-background';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';

interface Props {
  children?: ReactNode;
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
}

export const GridTwoColumn = ({
  children,
  title,
  text,
  srcImg,
  background = false,
}: Props) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <TextContainer>
          <Heading colorDarke={!background} uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};
