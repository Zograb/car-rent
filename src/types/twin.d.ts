import styledImport, { CSSProp, css as cssImport } from 'styled-components'

import 'twin.macro';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The tw and css prop
  interface Attributes {
    tw?: string;
    css?: CSSProp;
  }
}
