import {
  ButtonLine,
  MenuBtn,
} from '@/components/ServiceSlider/partials/MenuButton/index.styles';
import { useSideMenu } from '@/hooks/useSideMenu';

export function MenuButton() {
  const { isOpenMenu, openMenu } = useSideMenu();
  return (
    <MenuBtn onClick={openMenu}>
      <ButtonLine isOpenMenu={isOpenMenu} />
    </MenuBtn>
  );
}
