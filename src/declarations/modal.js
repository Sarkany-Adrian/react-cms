// @flow
import type { ComponentType } from 'react';

export interface ModalInterface {
  toggleVisibility(component: ComponentType<*>): void;
  open(component: ComponentType<*>): void;
  close(): void;
  component: ?ComponentType<*>;
}
