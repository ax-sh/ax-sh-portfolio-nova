import clsx from 'clsx';
import Image, { type ImageProps } from 'next/image';
import React, { type PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <main>{children}</main>;
}

export function ImageContain(props: ImageProps) {
  // return (
  //   <img
  //     {...props}
  //     className={clsx('object-contain object-bottom ', props.className)}
  //     alt={props.alt}
  //   />
  // );
  // NOTE Image tag adds these css position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;object-position:bottom;color:transparent
  return (
    <Image
      style={{ objectFit: 'contain', objectPosition: 'bottom' }}
      fill
      {...props}
      alt={props.alt}
    />
  );
}
