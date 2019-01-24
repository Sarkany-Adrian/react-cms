// @flow

export type TComponent = ?React$Element<*>;

export interface Modal {
  toggleVisibility(component: TComponent): void;
  open(component: TComponent): void;
  close(): void;
  component: TComponent;
}
