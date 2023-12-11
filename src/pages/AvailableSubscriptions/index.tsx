import {
  AvailableSubscriptionsWrapper,
  TitleWrapper,
} from '@/pages/AvailableSubscriptions/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { BlockTitle } from '@/components/BlockTitle';
import { Subscriptions } from '@/components/Subscriptions';

export function AvailableSubscriptions() {
  return (
    <AvailableSubscriptionsWrapper>
      <TitleWrapper>
        <HomepageButton />
        <BlockTitle marginBottom="0" mobileMarginBottom="0">
          Доступные подписки
        </BlockTitle>
      </TitleWrapper>
      <Subscriptions />
    </AvailableSubscriptionsWrapper>
  );
}
