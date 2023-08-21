import { BiCalendarCheck } from '@react-icons/all-files/bi/BiCalendarCheck';
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle';
import { AiOutlineCar } from '@react-icons/all-files/ai/AiOutlineCar';
import tw from 'twin.macro';

// Components
import { Button, DatePicker, Section, Select, TimePicker } from '@/components';

const options = [
  { value: '6465', label: '6465' },
  { value: '5665', label: '5665' },
  { value: '1755', label: '1755' },
  { value: '4532', label: '4532' },
  { value: '5543', label: '5543' },
];

export const CarAvailablity = () => (
  <Section>
    <div tw="pb-4 font-semibold">Car Availablity</div>
    <div tw="block grid-cols-car-availablity gap-6 2xl:grid">
      <Select
        icon={<AiOutlineCar />}
        options={options}
        tw="w-full mb-4 2xl:mb-0"
      />
      <div
        css={[
          tw`rounded-lg`,
          tw`border-none border-gray4 sm:(border border-solid)`,
          tw`grid grid-cols-1 sm:grid-cols-2`
        ]}
      >
        <div tw="mb-4 sm:mb-0">
          <DatePicker
            icon={<BiCalendarCheck />}
            customStyles={tw`sm:!border-none`}
            fullWidth
          />
        </div>
        <TimePicker
          icon={<AiOutlineClockCircle />}
          customStyles={tw`sm:(border-0 border-l rounded-bl-none rounded-tl-none)`}
          fullWidth
        />
      </div>
      <Button tw="mx-auto mt-4 2xl:mt-0" size="large">Check</Button>
    </div>
  </Section>
);
