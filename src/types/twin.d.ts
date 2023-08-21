import type { DOMAttributes } from 'react';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';
import 'twin.macro';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      as?: string;
      css?: CSSProp;
      tw?: string;
    }
  }
}
