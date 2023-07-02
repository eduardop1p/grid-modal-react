/* eslint-disable react/no-children-prop */
import { Heading } from '../../components/heading/index';
import { TextComponent } from '../../components/text-component';
import { MenuLink } from '../../components/menu-link';
import { NavLink } from '../../components/nav-links';
import { LogoLink } from '../../components/logo-link';
import { Menu } from '../../components/menu';
import { GridTwoColumn } from '../../components/grid-two-column';
import { GridContent } from '../../components/grid-content';
import { GridImage } from '../../components/grid-image';
import { Footer } from '../../components/footer';

import logo from '../../assets/imgs/logo.svg';
import mork from '../../components/grid-image/mork';

export default function Home() {
  return (
    <>
      <GridImage {...mork} />
    </>
  );
}
