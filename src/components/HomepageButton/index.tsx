import { Link } from 'react-router-dom';
import BackImage from '@/assets/images/svg/back-arrow.svg';
import { ImageBack } from '@/components/HomepageButton/index.styles';

export function HomepageButton() {
  return (
    <Link to="/">
      <ImageBack src={BackImage} />
    </Link>
  );
}
