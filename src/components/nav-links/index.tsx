import { Container } from './styled';
import { MenuLink } from '../menu-link';

interface Props {
  links?: string[];
}

export const NavLink = ({ links }: Props) => {
  return (
    <Container>
      {links?.map((link, index: number) => (
        <MenuLink key={index} link={link}>
          {link}
        </MenuLink>
      ))}
    </Container>
  );
};
