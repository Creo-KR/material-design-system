import { jsx } from '@emotion/react';
import { MDSCProps, MDSElement } from './component.type';

export function createMDSComponent<
  TTag extends keyof JSX.IntrinsicElements,
  P = {}
>(
  { as, htmlProps, ...props }: MDSCProps<TTag, P>,
  defaultTag: TTag
): MDSElement<TTag, P> {
  return jsx(as || defaultTag || 'div', { ...htmlProps, ...props });
}
