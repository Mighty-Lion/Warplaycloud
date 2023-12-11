import { SubscriptionCard } from '@/components/Subscriptions/partials/SubscriptionCard';
import { SubscriptionsContainer } from '@/components/Subscriptions/index.styles';

export const subscriptionsArray = [
  {
    name: `Почасовая
оплата`,
    rate: '45 р.  -  час',
    text: `Доступно:
Каталог игр
Виртуальный ПК
Безлимитная игровая сессия`,
    even: false,
  },
  {
    name: `Подписка
Максимум`,
    rate: '2999 р.  -  месяц',
    text: `Доступно: 
Каталог игр
Виртуальный ПК
Игровая сессия 10 часов/день`,
    even: true,
  },
  {
    name: `Подписка 
Минимум`,
    rate: '1500 р.  -  месяц',
    text: `Доступно:
Каталог игр
Игровая сессия 4 часов/день`,
    even: false,
  },
];
export interface ISubscriptionCardProps {
  name: string;
  rate: string;
  text: string;
  even: boolean;
}

export function Subscriptions() {
  const mappedSubscriptionsCards = subscriptionsArray.map(
    ({ name, even, text, rate }: ISubscriptionCardProps) => (
      <SubscriptionCard
        key={name + rate + text}
        name={name}
        text={text}
        rate={rate}
        even={even}
      />
    )
  );
  return (
    <SubscriptionsContainer>{mappedSubscriptionsCards}</SubscriptionsContainer>
  );
}
