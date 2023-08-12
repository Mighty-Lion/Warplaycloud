import {
  SubscriptionButton,
  SubscriptionCardName,
  SubscriptionCardRate,
  SubscriptionCardWrapper,
  SubscriptionText,
} from '@/components/Subscriptions/partials/SubscriptionCard/index.styles';
import { ISubscriptionCardProps } from '@/components/Subscriptions';

export function SubscriptionCard({ name, text, rate, even }: ISubscriptionCardProps) {
  return (
    <SubscriptionCardWrapper even={even}>
      <SubscriptionCardName even={even}>{name}</SubscriptionCardName>
      <SubscriptionCardRate even={even}>{rate}</SubscriptionCardRate>
      <SubscriptionText even={even}>{text}</SubscriptionText>
      <SubscriptionButton even={even}>Выбрать</SubscriptionButton>
    </SubscriptionCardWrapper>
  );
}
