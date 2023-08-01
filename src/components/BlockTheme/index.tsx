import { PropsWithChildren } from 'react';
import { MotionProps } from 'framer-motion';
import { ThemeText } from '@/components/BlockTheme/index.styles';

export function BlockTheme({
  children,
  variants,
}: PropsWithChildren<MotionProps>) {
  return <ThemeText variants={variants}>{children}</ThemeText>;
}
