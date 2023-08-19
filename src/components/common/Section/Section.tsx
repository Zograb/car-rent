import type { PropsWithChildren, FC, ComponentPropsWithoutRef } from 'react';
import 'twin.macro';

const Section: FC<PropsWithChildren<ComponentPropsWithoutRef<'div'>>> = ({
  children,
  ...otherProps
}) => (
  <div
    tw="py-8 px-7 mt-5 shadow-section rounded-lg"
    {...otherProps}
    data-testid="section"
  >
    {children}
  </div>
);

export default Section;
