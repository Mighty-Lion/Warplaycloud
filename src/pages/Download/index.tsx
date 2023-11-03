import {
  DownloadContainer,
  DownloadHeader,
  DownloadImage,
  DownloadReference,
  DownloadReferences,
  DownloadTitle,
  DownloadWrapper,
} from '@/pages/Download/index.styles';
import WindowsImage from '@/assets/images/png/Windows.png';
import LinuxImage from '@/assets/images/png/Linux.png';
import MacImage from '@/assets/images/png/Mac Client.png';
import ChromeImage from '@/assets/images/png/Chrome.png';
import { HomepageButton } from "@/components/HomepageButton";

export function Download() {
  return (
      <DownloadContainer>
        <DownloadHeader>
          <HomepageButton />
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
          <DownloadReference href={ChromeImage} download>
            <DownloadImage src={ChromeImage} />
          </DownloadReference>
        </DownloadReferences>
      </DownloadContainer>
  );
}
