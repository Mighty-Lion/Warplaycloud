import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useRef,
} from 'react';
import { useInView } from 'framer-motion';

export interface IAllRefContextProps {
  refSlider: MutableRefObject<HTMLDivElement>;
  refCloud: MutableRefObject<HTMLDivElement>;
  refBegin: MutableRefObject<HTMLDivElement>;
  refRates: MutableRefObject<HTMLDivElement>;
  refDevices: MutableRefObject<HTMLDivElement>;
  isInSightSlider: boolean;
  isInSightCloud: boolean;
  isInSightBegin: boolean;
  isInSightRates: boolean;
  isInSightDevices: boolean;
}

export const AllRefContext = createContext<IAllRefContextProps>(null!);
export function AllRefProvaider({ children }: PropsWithChildren) {
  const refSlider = useRef(document.createElement('div'));
  const refCloud = useRef(document.createElement('div'));
  const refBegin = useRef(document.createElement('div'));
  const refRates = useRef(document.createElement('div'));
  const refDevices = useRef(document.createElement('div'));

  const isInSightSlider = useInView(refSlider);
  const isInSightCloud = useInView(refCloud);
  const isInSightBegin = useInView(refBegin);
  const isInSightRates = useInView(refRates);
  const isInSightDevices = useInView(refDevices);
  return (
    <AllRefContext.Provider
      value={{
        refSlider,
        refCloud,
        refBegin,
        refRates,
        refDevices,
        isInSightSlider,
        isInSightCloud,
        isInSightDevices,
        isInSightBegin,
        isInSightRates,
      }}
    >
      {children}
    </AllRefContext.Provider>
  );
}
