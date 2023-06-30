import {
  AspectRatio,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  FlexProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { HTMLProps } from 'react';
import { useList } from 'react-use';

import { ShareFragmentFragment } from '@/lib/graphql/__generated__/graphql';
import clsxm from '@/lib/utils/clsxm';

import ContentCard from '@/components/ContentCard';
import { LinkChainExplorer } from '@/components/Link';
import UserAvatar from '@/components/UserAvatar';

import { useSplit } from '@/context/SplitContext';

const PieChart = dynamic(() => import('@/components/PieChart'), {
  ssr: false,
});

type ActiveShare = ShareFragmentFragment & { isActive?: boolean };

interface ShareItemProps extends FlexProps {
  share: ActiveShare;
  isActive?: boolean;
}

function ShareItem({ share, isActive, ...props }: ShareItemProps) {
  return (
    <Tr bg={isActive ? 'gray.100' : 'white'} {...props}>
      <Td>
        <Flex gap={'3'}>
          <UserAvatar address={share.payee} className={`h-6 w-6`} />

          <LinkChainExplorer address={share.payee} color={'secondary'} />
        </Flex>
      </Td>

      <Td isNumeric>{share.value * 100} %</Td>
    </Tr>
  );
}

export function Shares() {
  const { split } = useSplit();
  const [shares, { updateAt }] = useList<ActiveShare>(
    split.shares.map((s) => ({
      ...s,
      isActive: false,
    }))
  );

  function setActive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: true });
  }

  function setInactive(index: number) {
    updateAt(index, { ...(shares[index] as ActiveShare), isActive: false });
  }

  return (
    <ContentCard
      title={'Shares'}
      flex='1'
      bodyProps={{ flex: '1', overflowY: 'auto' }}
    >
      <Flex gap={'6'}>
        <AspectRatio flex={'1'} maxWidth={'33%'} ratio={1}>
          <PieChart
            data={shares}
            onMouseOut={(_, i) => setInactive(i)}
            onMouseMove={(_, i) => setActive(i)}
          />
        </AspectRatio>
        <TableContainer flex={'1'}>
          <Table size={'sm'}>
            <Tbody>
              {shares.map((share, index) => (
                <ShareItem
                  key={index}
                  onMouseOut={() => setInactive(index)}
                  onMouseMove={() => setActive(index)}
                  share={share}
                  isActive={share.isActive}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </ContentCard>
  );
}
