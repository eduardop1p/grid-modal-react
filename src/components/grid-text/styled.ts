import styled, { css } from 'styled-components';

import { Title } from '../heading/styled';
import { Container as TextComponent } from '../text-component/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${Title} {
      position: relative;
      left: 5rem;
    }

    ${Title}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(8deg);
    }
  `}
`;
