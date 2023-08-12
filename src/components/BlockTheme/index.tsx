import { PropsWithChildren } from 'react';
import { MotionProps } from 'framer-motion';
import { ThemeText } from '@/components/BlockTheme/index.styles';

export function BlockTheme({
  children,
  variants,
  custom,
}: PropsWithChildren<MotionProps>) {
  return <ThemeText  custom={custom} variants={variants}>{children}</ThemeText>;
}
