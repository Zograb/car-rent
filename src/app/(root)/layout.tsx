'use client';

import type { FC, PropsWithChildren } from 'react';
import { useCallback } from 'react';
import 'twin.macro';

// Components
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

// Hooks
import { useBreakpointTrigger } from '@/hooks';

// Store
import { useStore } from '@/store';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const menuOpen = useStore.use.menuOpen();
  const updateMenuState = useStore.use.updateMenuState();

  const toggleMenu = useCallback(() => {
    updateMenuState(!menuOpen);
  }, [menuOpen, updateMenuState]);

  const openMenuState = useCallback(() => {
    updateMenuState(true);
  }, [updateMenuState]);

  const closeMenuState = useCallback(() => {
    updateMenuState(false);
  }, [updateMenuState]);

  useBreakpointTrigger({
    breakpoint: 'lg',
    condition: 'below',
    triggerFn: closeMenuState,
  });

  useBreakpointTrigger({
    breakpoint: 'lg',
    condition: 'above',
    triggerFn: openMenuState,
  });

  return (
    <div>
      <Sidebar {...{ menuOpen, toggleMenu }} />
      <div tw="lg:pl-sidebar">
        <Header toggleMenu={toggleMenu} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
