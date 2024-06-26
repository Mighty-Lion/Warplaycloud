import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';
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
import { useAllRef } from "@/hooks/useAllRef";

export function Rates() {
  const { refRates, refRates2 } = useAllRef();
  const isInViewRates = useInView(refRates, { once: true });
  const controlsRates = useAnimation();

  useEffect(() => {
    if (isInViewRates) {
      controlsRates.start('visible');
    }
  }, [controlsRates, isInViewRates]);

  return (
    <section id="prices" ref={refRates}>
      <RatesContainer
        initial="hidden"
        animate={controlsRates}
        variants={slidingVariants}
      >
        <RatesThemeWrapper ref={refRates2}>
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
    </section>
  );
}
