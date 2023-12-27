import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import IconButtonListContainer from '@/components/Shell/IconButtonListContainer';
import Link from 'next/link';

interface PoolHandlersProps {
  pool?: SplitBaseFragmentFragment | null;
}

export default function PoolHandlers({ pool }: PoolHandlersProps) {
  const items = [
    {
      'aria-label': 'Withdraw',
      icon: <IoPushOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/withdraw`,
    },
    {
      'aria-label': 'Deposit',
      icon: <IoDownloadOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/deposit`,
    },
    {
      'aria-label': 'Settings',
      icon: <IoSettingsOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/settings`,
    },
  ];

  return (
    <IconButtonListContainer
      items={items}
      as={'article'}
      my={'3'}
      containerProps={{ px: '0' }}
    />
  );
}
