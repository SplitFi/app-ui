import useSWR, { SWRConfiguration } from 'swr';

import { ipfsUrlFromUri } from '@/lib/utils';

import { getMetadata } from './fetchers';

export function useMetadata({
  uri,
  ...props
}: { uri?: string | null } & SWRConfiguration) {
  return useSWR(ipfsUrlFromUri(uri || ''), () => getMetadata(uri), props);
}
