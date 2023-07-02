import { ReactNode } from 'react';

import { Container, Grid, GridElement } from './styled';
import { SectionBackground } from '../section-background';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';

interface TitleDescription {
  title: string;
  description: string;
}
interface Props extends TitleDescription {
  children?: ReactNode;
  background?: boolean;
  grid: TitleDescription[];
}

export const GridText = ({
  children,
  title,
  description,
  background = false,
  grid,
}: Props) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="huge" uppercase colorDarke={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid?.map((el, index: number) => (
            <GridElement key={index}>
              <Heading size="small" colorDarke={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
