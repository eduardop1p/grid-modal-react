import { useState, MouseEvent } from 'react';

import { Container, Grid, GridElement, Image } from './styled';
import { SectionBackground } from '../section-background';
import { Heading } from '../heading';
import { TextComponent } from '../text-component';
import { Modal } from './modal';

interface Props {
  title: string;
  description: string;
  background?: boolean;
  grid: {
    altText: string;
    srcImg: string;
  }[];
}

export interface ImgProps {
  src: string;
  alt: string;
}

export const GridImage = ({
  background = false,
  title,
  description,
  grid,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [imgObj, setImgObj] = useState<ImgProps>({ src: '', alt: '' });

  // exemplo de um evento de click abaixo
  const handleModal = (event: MouseEvent<HTMLImageElement>): void => {
    const img = event.target as HTMLImageElement;
    setImgObj({ src: img.src, alt: img.alt });
    setShowModal(true);
  };

  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="huge" uppercase colorDarke={!background} as="h2">
          {title}
        </Heading>
        <TextComponent html={description} />
        <Grid>
          {grid?.map((el, index: number) => (
            <GridElement key={index}>
              <Image src={el.srcImg} alt={el.altText} onClick={handleModal} />
            </GridElement>
          ))}
        </Grid>
        <Modal imgObj={imgObj} controlModal={{ showModal, setShowModal }} />
      </Container>
    </SectionBackground>
  );
};
