import { StaticImageData } from 'next/dist/client/image';
import Image, { type ImageProps } from 'next/image';
import React, { HTMLProps } from 'react';
import { IoImage } from 'react-icons/io5';

import clsxm from '@/lib/utils/clsxm';

type SplitImageInnerProps = ImageProps & {
  src?: StaticImageData | string;
};

type SplitImageProps = HTMLProps<HTMLDivElement> & SplitImageInnerProps;

function ipfsUrlFromUri(uri: string) {
  return uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
}

function SplitImageInner({
  src,
  alt = 'Unknown Split',
  width = 128,
  height = 128,
  className,
  ...props
}: SplitImageInnerProps) {
  const classes = clsxm('block w-full object-cover', className);

  return !!src ? (
    <Image
      className={classes}
      src={src}
      alt={alt || 'Unknown Split'}
      width={width}
      height={height}
      {...props}
    />
  ) : (
    <IoImage className={classes} />
  );
}
export function SplitImage({ src, className, ...props }: SplitImageProps) {
  const _src = typeof src === 'string' ? ipfsUrlFromUri(src) : src;

  return (
    <div
      className={clsxm(
        'bg-default-2 rounded-default border-default relative flex w-10 border ',
        className
      )}
    >
      <span className={'block aspect-square w-full'} />
      <span className={'absolute top-0 left-0 block flex h-full w-full'}>
        <SplitImageInner
          src={_src}
          className={'rounded-default flex-1 overflow-hidden'}
          {...props}
        />
      </span>
    </div>
  );
}
