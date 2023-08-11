import {
  RatesContainer,
  RatesThemeWrapper,
} from '@/components/Content/partials/Rates/index.styles';
import { BlockTheme } from '@/components/BlockTheme';
import { slidingVariants } from '@/components/Content/variants';
import { BlockTitle } from '@/components/BlockTitle';
import { Subscriptions } from '@/components/Subscriptions';

export function Rates() {
  return (
    <RatesContainer>
      <RatesThemeWrapper>
        <BlockTheme variants={slidingVariants}>Гибкие тарифы</BlockTheme>
      </RatesThemeWrapper>
      <BlockTitle
        marginBottom="80px"
        mobileMarginBottom="58px"
        variants={slidingVariants}
      >
        Доступные подписки
      </BlockTitle>
      <Subscriptions />
    </RatesContainer>
  );
}
