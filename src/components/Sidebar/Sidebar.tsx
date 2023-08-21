import Link from 'next/link';
import tw from 'twin.macro';

// Icons
import { RiDashboardLine } from '@react-icons/all-files/ri/RiDashboardLine';
import { IoIosExit } from '@react-icons/all-files/io/IoIosExit';
import { AiOutlineTransaction } from '@react-icons/all-files/ai/AiOutlineTransaction';
import { AiFillCar } from '@react-icons/all-files/ai/AiFillCar';
import { BiBook } from '@react-icons/all-files/bi/BiBook';
import { FaRegBell } from '@react-icons/all-files/fa/FaRegBell';
import { FiSettings } from '@react-icons/all-files/fi/FiSettings';
import { BsCreditCard } from '@react-icons/all-files/bs/BsCreditCard';
import { HiOutlineDocumentReport } from '@react-icons/all-files/hi/HiOutlineDocumentReport';
import { IoClose } from '@react-icons/all-files/io5/IoClose';

// Components
import { Button, Logo } from '@/components/common';
import SidebarButton from './SidebarButton';

interface SidebarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ menuOpen, toggleMenu }: SidebarProps) => (
  <div
    css={[
      tw`transition-all duration-150 ease-out`,
      tw`fixed top-0 -left-full z-20 lg:left-0`,
      tw`overflow-auto h-full w-full lg:w-sidebar`,
      tw`bg-black pt-12`,
      tw`lg:flex flex-col justify-start`,
      menuOpen && tw`left-0`,
    ]}
    data-testid="sidebar"
  >
    <Button
      variant="secondary"
      size="small"
      tw="absolute top-4 left-6 bg-transparent px-0 lg:hidden"
      onClick={toggleMenu}
    >
      <IoClose tw="text-white text-4xl" />
    </Button>
    <div tw="pb-4 lg:pb-0">
      <div tw="flex justify-center items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div tw="px-6 grow">
        <nav tw="mt-11 border-b border-solid border-white/20 pb-6">
          <SidebarButton icon={<RiDashboardLine />} label="Dashboard" href="/" />
          <SidebarButton icon={<AiFillCar />} label="Drivers" href="/drivers" />
          <SidebarButton icon={<BiBook />} label="Bookings" href="/bookings" />
          <SidebarButton icon={<FaRegBell />} label="Notifications" href="/notifications" />
          <SidebarButton icon={<FiSettings />} label="Settings" href="/settings" />
        </nav>
        <div tw="text-white opacity-50 mt-9 mb-3 pl-4">Report</div>
        <nav>
          <SidebarButton
            icon={<BsCreditCard />}
            label="Payment Details"
            href="/payment-details"
          />
          <SidebarButton
            icon={<AiOutlineTransaction />}
            label="Transactions"
            href="/transactions"
          />
          <SidebarButton
            icon={<HiOutlineDocumentReport />}
            label="Car Report"
            href="/car-report"
          />
        </nav>
      </div>
      <div tw="px-6 mb-14">
        <Button
          tw="w-full"
          variant="secondary"
          size="large"
          icon={<IoIosExit />}
        >
          Logout
        </Button>
      </div>
    </div>
  </div>
);

export default Sidebar;
