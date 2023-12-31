import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../section-container/styled';
import { Title } from '../heading/styled';

interface Props {
  $visible: boolean;
}

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div<Props>`
  ${({ theme, $visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    border-bottom: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;

    // estilizando outro component styled abaixo
    & > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    ${Title} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${$visible && menuVisible()}

      & > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      ${Title} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button<Props>`
  ${({ theme, $visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 3rem;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    cursor: pointer;
    pointer-events: ${$visible ? 'none' : 'all'};

    & > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
