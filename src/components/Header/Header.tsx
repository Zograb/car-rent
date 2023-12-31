import tw from 'twin.macro';

// Icons
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import { BsBellFill } from '@react-icons/all-files/bs/BsBellFill';

// Components
import { Button, Input } from '@/components/common';

interface HeaderProps {
  toggleMenu: () => void;
}

const Header = ({ toggleMenu }: HeaderProps) => (
  <header
    css={[
      tw`sticky top-0 left-0 z-10`,
      tw`flex justify-start items-center`,
      tw`px-7 py-2 w-full ml-auto`,
      tw`bg-white shadow`,
    ]}
    data-testid="header"
  >
    <Button
      variant="secondary"
      size="small"
      tw="px-0 lg:hidden"
      onClick={toggleMenu}
    >
      <FiMenu tw="text-black text-3xl" />
    </Button>
    <div tw="grow flex justify-end items-center pl-6">
      <div
        css={[
          tw`relative cursor-pointer mr-7`,
          tw`flex justify-center items-center`,
        ]}
      >
        <BsBellFill tw="text-gray2 text-2xl" />
        <div
          css={[
            tw`w-2 h-2`,
            tw`bg-secondary rounded-full`,
            tw`absolute top-3 right-0`,
            tw`border border-solid border-white`,
          ]}
        />
      </div>
      <Input
        icon={<BiSearch />}
        iconPosition="right"
        containerStyles={tw`w-full sm:w-80`}
      />
    </div>
  </header>
);

export default Header;
