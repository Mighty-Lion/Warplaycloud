import {
  CloudContainer,
  CloudImgWrapper,
} from '@/components/Content/partials/Cloud/index.styles';
import CloudImg from '@/assets/images/png/cloud.png';

export function Cloud() {
  return (
    <CloudContainer>
      <CloudImgWrapper>
        <img src={CloudImg} alt="" />
      </CloudImgWrapper>
    </CloudContainer>
  );
}
