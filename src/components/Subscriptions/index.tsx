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
  },
  {
    name: `Подписка
Максимум`,
    rate: '2999 р.  -  месяц',
    text: `Доступно: 
Каталог игр
Виртуальный ПК
Игровая сессия 10 часов/день`,
  },
  {
    name: `Подписка 
Минимум`,
    rate: '1500 р.  -  месяц',
    text: `Доступно:
Каталог игр
Игровая сессия 4 часов/день`,
  },
];
export interface ISubscriptionCardProps {
  name: string;
  rate: string;
  text: string;
}

export function Subscriptions() {
  const mappedSubscriptionsCards = subscriptionsArray.map(
    (item: ISubscriptionCardProps) => (
      <SubscriptionCard
        key={item.name + item.rate + item.text}
        name={item.name}
        text={item.text}
        rate={item.rate}
      />
    )
  );
  return (
    <SubscriptionsContainer>{mappedSubscriptionsCards}</SubscriptionsContainer>
  );
}
