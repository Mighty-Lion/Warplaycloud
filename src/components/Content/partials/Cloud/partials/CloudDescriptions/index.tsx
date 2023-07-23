import { PropsWithChildren } from 'react';
import { DescriotionText } from '@/components/Content/partials/Cloud/partials/CloudDescriptions/index.styles';

export function CloudDescriptions({ children }: PropsWithChildren) {
  return <DescriotionText>{children}</DescriotionText>;
}
