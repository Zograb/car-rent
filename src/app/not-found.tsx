'use client';

import Link from 'next/link';
import tw from 'twin.macro';

export default function NotFound() {
  return (
    <div css={[
      tw`flex justify-center items-center flex-col`,
      tw`h-screen w-screen`,
    ]}>
      <h2 tw="text-center pt-12 text-6xl">Not found</h2>
      <Link href="/" tw="mt-4 text-2xl">Return Home</Link>
    </div>
  );
}