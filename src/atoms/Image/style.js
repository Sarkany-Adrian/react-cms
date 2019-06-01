// @flow
import styled, { css } from 'styled-components';

const StyledImage = styled.img`
  display: inline-block;
  ${(props: Object) =>
    props.circle &&
    css`
      border-radius: 50%;
    `};

  ${(props: Object) =>
    props.rounded &&
    css`
      border-radius: 5px;
    `};

  ${(props: Object) =>
    props.crisp &&
    css`
      border-radius: 1px;
    `};
  ${(props: Object) =>
    props.xs &&
    css`
      height: 25px;
      width: auto;
    `};
  ${(props: Object) =>
    props.sm &&
    css`
      height: 50px;
      width: auto;
    `};
  ${(props: Object) =>
    props.md &&
    css`
      height: 100px;
      width: auto;
    `};
  ${(props: Object) =>
    props.lg &&
    css`
      height: 150px;
      width: auto;
    `};
  ${(props: Object) =>
    props.responsive &&
    css`
      max-width: 100%;
      height: auto;
    `};
  ${(props: Object) =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
`;

export default StyledImage;
