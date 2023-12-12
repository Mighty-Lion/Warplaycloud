import {
  AvailableSubscriptionsWrapper,
  TitleWrapper,
} from '@/pages/AvailableSubscriptions/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { BlockTitle } from '@/components/BlockTitle';
import { Subscriptions } from '@/components/Subscriptions';
import { setTabTitle } from '@/functions/setTabTitle';
import ScrollToTop from '@/components/ScrollToTop';

export function AvailableSubscriptions() {
  setTabTitle('Подписки - Warplaycloud');

  return (
    <AvailableSubscriptionsWrapper>
      <ScrollToTop />
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
