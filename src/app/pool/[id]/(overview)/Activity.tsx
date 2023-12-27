import React from 'react';

import ActivityTable from '@/components/ActivityTable';
import ContentCard from '@/components/ContentCard';

import { GetTokenTransfersReply } from '@ankr.com/ankr.js';
import { SplitBaseFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import SectionContainer from '@/components/Shell/SectionContainer';

interface PoolActivityProps {
  pool?: SplitBaseFragmentFragment | null;
  activity?: GetTokenTransfersReply;
}

export default function PoolActivity({ pool, activity }: PoolActivityProps) {
  return (
    <ContentCard title={'Activity'} bodyProps={{ p: '0' }}>
      <ActivityTable
        transfers={activity?.transfers}
        address={pool?.address}
        size={'sm'}
      />
    </ContentCard>
  );
}
