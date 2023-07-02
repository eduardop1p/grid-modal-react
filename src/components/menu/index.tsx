import { ReactNode, useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { Container, MenuContainer, Button } from './styled';
import { SectionContainer } from '../section-container';
import { LogoLink } from '../logo-link';
import { NavLink } from '../nav-links';

interface Props {
  children?: ReactNode;
  links?: string[];
  logoData: { link: string; text: string; srcImg?: string };
}

export const Menu = ({ children, links = [], logoData }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        $visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container $visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};
