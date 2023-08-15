import { ReactHTML, createElement } from 'react';
import { MDSCProps, MDSElement } from './component.type';

export function createMDSComponent<TTag extends keyof ReactHTML, P = {}>(
  { as, htmlProps, ...props }: MDSCProps<TTag, P>,
  defaultTag: TTag
): MDSElement<TTag, P> {
  return createElement(as || defaultTag || 'div', { ...htmlProps, ...props });
}