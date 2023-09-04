import {
  DownloadContainer,
  DownloadHeader,
  DownloadImage,
  DownloadLink,
  DownloadReference,
  DownloadReferences,
  DownloadTitle,
} from '@/pages/Download/index.styles';
import BackImage from '@/assets/images/svg/back-arrow.svg';
import WindowsImage from '@/assets/images/png/Windows.png';
import LinuxImage from '@/assets/images/png/Linux.png';
import MacImage from '@/assets/images/png/Mac Client.png';
import ChromeImage from '@/assets/images/png/Chrome.png';

export function Download() {
  return (
    <DownloadContainer>
      <DownloadHeader>
        <DownloadLink to="/">
          <DownloadImage src={BackImage} />{' '}
          <DownloadTitle>Выберете операционную систему</DownloadTitle>
        </DownloadLink>
      </DownloadHeader>
      <DownloadReferences>
        <DownloadReference download={WindowsImage}>
          <DownloadImage src={WindowsImage} />
        </DownloadReference>
        <DownloadReference download={MacImage}>
          <DownloadImage src={MacImage} />
        </DownloadReference>
        <DownloadReference download={LinuxImage}>
          <DownloadImage src={LinuxImage} />
        </DownloadReference>
        <DownloadReference download={ChromeImage}>
          <DownloadImage src={ChromeImage} />
        </DownloadReference>
      </DownloadReferences>
    </DownloadContainer>
  );
}
