import { Cloud } from '@/components/Content/partials/Cloud';
import { ContentContainer } from '@/components/Content/index.styles';
import {Begin} from "@/components/Content/partials/Begin";

export function Content() {
  return (
    <ContentContainer>
      <Cloud />
      <Begin />
    </ContentContainer>
  );
}
