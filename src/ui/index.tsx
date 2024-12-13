import type { ImageProps } from 'next/image';
import React, { type PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <main>{children}</main>;
}

export function ImageContain(props: ImageProps) {
  // @ts-expect-error UNKNOWN ERROR TODO
  return <img className={'object-contain object-bottom'} {...props} alt={'Hero'} />;
  // return <Image style={{ objectFit: 'contain', objectPosition: 'bottom' }} fill {...props} />;
}
