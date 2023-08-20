import { useMemo, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';
import cx from 'classnames';

interface SidebarButtonProps {
  // button label
  label: string;

  // button icon component
  icon?: ReactNode;

  // link to page
  href: string;
}

const SidebarButton = ({
  label,
  icon = null,
  href = '',
}: SidebarButtonProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => pathname === href, [pathname, href]);

  const linkClassName = useMemo(() => {
    const className = cx(
      'flex justify-start items-center mb-2',
      'h-12 ease-linear duration-150 cursor-pointer rounded text-white relative',
      {
        'opacity-75 hover:bg-white/25': !isActive,
        'bg-primary opacity-100 hover:bg-primary': isActive,
      },
    );
    const groupClassName = isActive ? ' group sidebar-link' : '';
    return `${className}${groupClassName}`;
  }, [isActive]);

  const Tag = href ? Link : styled.div``;

  return (
    <Tag
      href={href || ''}
      className={linkClassName}
    >
      <div tw="flex justify-center items-center w-12">{icon}</div>
      <div>{label}</div>
      <div
        css={[
          tw`absolute top-1/2 left-0 -translate-y-1/2`,
          tw`w-1.5 h-9`,
          tw`ease-linear duration-150`,
          tw`opacity-0 bg-white rounded`,
          tw`group-[.sidebar-link]:opacity-100`,
        ]}
      />
    </Tag>
  );
}

export default SidebarButton;
