import { type ComponentPropsWithRef, forwardRef } from 'react';

type UnoptimizedImageProps = ComponentPropsWithRef<'img'>;

/* eslint-disable @next/next/no-img-element */
export const UnoptimizedImage = forwardRef<HTMLImageElement, UnoptimizedImageProps>(
  ({ style, alt, ...props }, ref) => {
    return (
      <img
        ref={ref}
        {...props}
        alt={alt}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: 'contain',
          objectPosition: 'bottom',
          color: 'transparent',
          ...style,
        }}
      />
    );
  }
);
/* eslint-enable @next/next/no-img-element */
UnoptimizedImage.displayName = 'UnoptimizedImage';
