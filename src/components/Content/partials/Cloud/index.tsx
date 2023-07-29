import {
  CloudContainer,
  CloudImg,
  CloudImgWrapper,
  CloudTextWrapper,
  CloudTheme,
  CloudTitle,
} from '@/components/Content/partials/Cloud/index.styles';
import CloudImage from '@/assets/images/png/cloud.png';
import { CloudDescription } from '@/components/Content/partials/Cloud/partials/CloudDescriptions';

export function Cloud() {
  return (
    <CloudContainer>
      <CloudImgWrapper>
        <CloudImg src={CloudImage} />
      </CloudImgWrapper>
      <CloudTextWrapper>
        <CloudTheme>Облачный гейминг</CloudTheme>
        <CloudDescription>
          <CloudTitle>Как это работает</CloudTitle>
          Наши сервера запускают игру, и передают вам картинку, которой вы
          можете управлять в реальном времени!
        </CloudDescription>
        <CloudDescription>
          Приложение запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и
          доступом в интернет от 15 мбит/с на всех операционых системах Windows
          7, 8, 10 MacOS и Linux .
        </CloudDescription>
      </CloudTextWrapper>
    </CloudContainer>
  );
}
