import type { ImageProps } from 'next/image';
import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import React from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <main>{children}</main>;
}

export function ImageContain(props: ImageProps) {
  // return <UnoptimizedImage src={props.src as string} />;
  // NOTE Image tag adds these css position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;object-position:bottom;color:transparent
  // Below will not work on storybook with vite
  return (
    <Image
      style={{ objectFit: 'contain', objectPosition: 'bottom' }}
      fill
      {...props}
      alt={props.alt}
    />
  );
}
