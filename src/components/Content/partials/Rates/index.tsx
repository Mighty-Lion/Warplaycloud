import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import {
  RatesContainer,
  RatesLine,
  RatesThemeWrapper,
  RatesTitleWrapper,
  SubscriptionsWrapper,
} from '@/components/Content/partials/Rates/index.styles';
import { BlockTheme } from '@/components/BlockTheme';
import { slidingVariants } from '@/components/variants';
import { BlockTitle } from '@/components/BlockTitle';
import { Subscriptions } from '@/components/Subscriptions';

export function Rates() {
  const refRates = useRef(null);
  const isInViewRates = useInView(refRates, { once: true });
  const controlsRates = useAnimation();

  useEffect(() => {
    if (isInViewRates) {
      console.log('Element is in view: ', isInViewRates);
      controlsRates.start('visible');
    }
  }, [controlsRates, isInViewRates]);

  return (
    <div ref={refRates}>
      <RatesContainer
        initial="hidden"
        animate={controlsRates}
        variants={slidingVariants}
      >
        <RatesThemeWrapper>
          <BlockTheme variants={slidingVariants}>Гибкие тарифы</BlockTheme>
        </RatesThemeWrapper>
        <RatesTitleWrapper>
          <BlockTitle
            marginBottom="80px"
            mobileMarginBottom="58px"
            variants={slidingVariants}
          >
            Доступные подписки
          </BlockTitle>
        </RatesTitleWrapper>
        <SubscriptionsWrapper variants={slidingVariants}>
          <Subscriptions />
        </SubscriptionsWrapper>
        <RatesLine variants={slidingVariants} />
      </RatesContainer>
    </div>
  );
}
