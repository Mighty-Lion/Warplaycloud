import {
  DownloadContainer,
  DownloadHeader,
  DownloadImage,
  DownloadLink,
  DownloadReference,
  DownloadReferences,
  DownloadTitle,
  DownloadWrapper,
} from '@/pages/Download/index.styles';
import BackImage from '@/assets/images/svg/back-arrow.svg';
import WindowsImage from '@/assets/images/png/Windows.png';
import LinuxImage from '@/assets/images/png/Linux.png';
import MacImage from '@/assets/images/png/Mac Client.png';
import ChromeImage from '@/assets/images/png/Chrome.png';

export function Download() {
  return (
    <DownloadWrapper>
      <DownloadContainer>
        <DownloadHeader>
          <DownloadLink to="/">
            <DownloadImage src={BackImage} />
          </DownloadLink>
          <DownloadTitle>Выберете операционную систему</DownloadTitle>
        </DownloadHeader>
        <DownloadReferences>
          <DownloadReference href={WindowsImage} download>
            <DownloadImage src={WindowsImage} />
          </DownloadReference>
          <DownloadReference href={MacImage} download>
            <DownloadImage src={MacImage} />
          </DownloadReference>
          <DownloadReference href={LinuxImage} download>
            <DownloadImage src={LinuxImage} />
          </DownloadReference>
          <DownloadReference href={ChromeImage} download  >
            <DownloadImage src={ChromeImage} />
          </DownloadReference>
        </DownloadReferences>
      </DownloadContainer>
    </DownloadWrapper>
  );
}
