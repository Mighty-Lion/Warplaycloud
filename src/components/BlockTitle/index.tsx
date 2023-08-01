import { PropsWithChildren } from 'react';
import { MotionProps } from 'framer-motion';
import { TitleText } from '@/components/BlockTitle/index.styles';

interface IBlockTitleProps extends PropsWithChildren<MotionProps> {
  marginBottom: string;
  mobileMarginBottom: string;
}
export function BlockTitle({
  marginBottom,
  mobileMarginBottom,
  children,
  variants,
}: IBlockTitleProps) {
  return (
    <TitleText
      marginBottom={marginBottom}
      mobileMarginBottom={mobileMarginBottom}
      variants={variants}
    >
      {children}
    </TitleText>
  );
}
