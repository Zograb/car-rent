'use client';

import 'twin.macro';

import { Spinner } from "@/components";

const Loading = () => (
  <div tw="h-80 max-h-screen flex justify-center items-center">
    <Spinner size="large" tw="text-primary text-8xl" />
  </div>
);

export default Loading;
