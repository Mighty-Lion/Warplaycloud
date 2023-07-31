import { PropsWithChildren } from 'react';
import { MotionProps } from 'framer-motion';
import { DescriotionText } from '@/components/Content/partials/Cloud/partials/CloudDescription/index.styles';

export function CloudDescription({
  variants,
  children,
}: PropsWithChildren<MotionProps>) {
  return (
    <DescriotionText variants={variants}>
      {children}
    </DescriotionText>
  );
}
