import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useRef,
} from 'react';

export interface IAllRefContextProps {
  refSlider: MutableRefObject<HTMLDivElement>;
  refCloud: MutableRefObject<HTMLDivElement>;
  refBegin: MutableRefObject<HTMLDivElement>;
  refRates: MutableRefObject<HTMLDivElement>;
  refRates2: MutableRefObject<HTMLDivElement>;
  refDevices: MutableRefObject<HTMLDivElement>;
}

export const AllRefContext = createContext<IAllRefContextProps>(null!);
export function AllRefProvaider({ children }: PropsWithChildren) {
  const refSlider = useRef(document.createElement('div'));
  const refCloud = useRef(document.createElement('div'));
  const refBegin = useRef(document.createElement('div'));
  const refRates = useRef(document.createElement('div'));
  const refDevices = useRef(document.createElement('div'));

  const refRates2 = useRef(document.createElement('div'));

  return (
    <AllRefContext.Provider
      value={{
        refSlider,
        refCloud,
        refBegin,
        refRates,
        refRates2,
        refDevices,
      }}
    >
      {children}
    </AllRefContext.Provider>
  );
}
