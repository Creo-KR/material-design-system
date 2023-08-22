import { Interpolation, Theme } from '@emotion/react';
import { DetailedHTMLProps, FC, RefAttributes } from 'react';

/**
 * Material Design System Component
 */
export interface MDSC<TTag extends keyof JSX.IntrinsicElements, TProps>
  extends FC<MDSCProps<TTag, TProps>> {}

/**
 * Material Design System Element
 */
export type MDSElement<
  TTag extends keyof JSX.IntrinsicElements,
  TProps
> = ReturnType<MDSC<TTag, TProps>>;

/**
 * Material Design System Component Properties
 */
export type MDSCProps<
  TTag extends keyof JSX.IntrinsicElements,
  TProps
> = MaterialDesignSystemComponentProps<TTag, TProps> & {
  className?: string;
} & TProps;

interface MaterialDesignSystemComponentProps<
  TTag extends keyof JSX.IntrinsicElements,
  TProps
> extends WithCSSProp {
  as?: TTag;
  htmlProps?: Omit<HTMLAttributes<TTag>, keyof TProps> &
    RefAttributes<HTMLElement<TTag>>;
}

/**
 * Emotion CSS Prop
 */
export interface WithCSSProp {
  css?: Interpolation<Theme>;
}

export type HTMLElement<TTag extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TTag] extends DetailedHTMLProps<
    infer _,
    infer THTMLElement
  >
    ? THTMLElement
    : never;

export type HTMLAttributes<TTag extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TTag] extends DetailedHTMLProps<
    infer THTMLAttributes,
    infer _
  >
    ? THTMLAttributes
    : never;
