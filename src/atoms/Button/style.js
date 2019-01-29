// @flow
import styled, { css } from 'styled-components';
// import type { Theme } from 'declarations/theme';

const StyledButton = styled.button`
  font-size: ${({ theme }: any) => theme.font.fontSizeSmall}px;
  font-family: ${({ theme }: any) => theme.font.fontBody};
  border: none;
  text-transform: uppercase;
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  ${(props: Object) =>
    props.primary &&
    css`
      background: ${({ theme }: any) => theme.colors.primary};
      border: 2px solid ${({ theme }: any) => theme.colors.primary};
      color: white;
    `};

  ${(props: Object) =>
    props.danger &&
    css`
      background: ${({ theme }: any) => theme.colors.danger};
      border: 2px solid ${({ theme }: any) => theme.colors.danger};
      color: white;
    `};
  &:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: none;
  }
`;

export default StyledButton;
