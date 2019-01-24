// @flow
import { type Node } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  parentElement: HTMLElement,
  children: Node,
  shouldCreatePortal?: boolean
};

function Portal({ parentElement, children, shouldCreatePortal }: Props) {
  if (parentElement && shouldCreatePortal)
    return createPortal(children, parentElement);
  return null;
}

export default Portal;
