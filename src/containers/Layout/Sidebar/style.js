// @flow
import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  font-family: ${({ theme }: any) => theme.font.fontBody};
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  position: fixed;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  overflow: hidden;
`;

export const StyledSidebarHeader = styled.div`
  background-color: ${({ theme }: any) => theme.colors.primary};
  color: white;
  padding: 16px;
  text-align: center;
`;

export const StyledMenuItem = styled.li`
  display: block;
  padding: 16px 0;
  color: blue;
  text-decoration: none;

  a {
    display: block;
    padding: 16px 0;
    color: ${({ theme }: any) => theme.baseColors.lightBlue};
    text-decoration: none;
  }
`;
