import { useState } from 'react';
import {
  ButtonLine,
  MenuButton,
} from '@/components/ServiceSlider/partials/MenuButton/index.styles';

export function MenuBtn() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log(isOpenMenu);
  return (
    <MenuButton onClick={() => setIsOpenMenu((prev) => !prev)}>
      <ButtonLine isOpenMenu={isOpenMenu} />
    </MenuButton>
  );
}
