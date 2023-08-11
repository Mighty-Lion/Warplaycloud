import {
  SubscriptionButton,
  SubscriptionCardName,
  SubscriptionCardRate,
  SubscriptionCardWrapper,
  SubscriptionText,
} from '@/components/Subscriptions/partials/SubscriptionCard/index.styles';
import { ISubscriptionCardProps } from '@/components/Subscriptions';

export function SubscriptionCard({ name, text, rate }: ISubscriptionCardProps) {
  return (
    <SubscriptionCardWrapper>
      <SubscriptionCardName>{name}</SubscriptionCardName>
      <SubscriptionCardRate>{rate}</SubscriptionCardRate>
      <SubscriptionText>{text}</SubscriptionText>
      <SubscriptionButton>Выбрать</SubscriptionButton>
    </SubscriptionCardWrapper>
  );
}
