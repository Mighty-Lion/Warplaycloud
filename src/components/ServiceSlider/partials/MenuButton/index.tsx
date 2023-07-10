import {
  ButtonLine,
  MenuButton,
} from '@/components/ServiceSlider/partials/MenuButton/index.styles';
import { useSideMenu } from '@/hooks/useSideMenu';

export function MenuBtn() {
  const { isOpenMenu, openMenu } = useSideMenu();

  return (
    <MenuButton onClick={openMenu}>
      <ButtonLine isOpenMenu={isOpenMenu} />
    </MenuButton>
  );
}
