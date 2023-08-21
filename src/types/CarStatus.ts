import { LiveCarStatus } from '@/utils/constants/enums';

export interface LiveCarDriver {
  name: string;
  avatarUrl: string;
}

export interface LiveCar {
  carNumber: number;
  driver: LiveCarDriver;
  status: LiveCarStatus;
  earning: number;
}
