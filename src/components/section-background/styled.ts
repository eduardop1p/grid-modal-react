import styled, { css, DefaultTheme } from 'styled-components';

const containerBackgroundActivate = (
  theme: Pick<DefaultTheme, 'colors'>
) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<{ $background?: boolean }>`
  ${({ theme, $background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${$background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
    max-width: 100rem;
    margin: 0 auto;
    justify-content: center;
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
  `}
`;
