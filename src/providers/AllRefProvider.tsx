import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useRef,
} from 'react';

export interface IAllRefContextProps {
  refCloud: MutableRefObject<HTMLDivElement>;
  refBegin: MutableRefObject<HTMLDivElement>;
  refRates: MutableRefObject<HTMLDivElement>;
  refDevices: MutableRefObject<HTMLDivElement>;
}

export const AllRefContext = createContext<IAllRefContextProps>(null!);
export function AllRefProvaider({ children }: PropsWithChildren) {
  const refCloud = useRef(document.createElement('div'));
  const refBegin = useRef(document.createElement('div'));
  const refRates = useRef(document.createElement('div'));
  const refDevices = useRef(document.createElement('div'));
  return (
    <AllRefContext.Provider
      value={{ refCloud, refBegin, refRates, refDevices }}
    >
      {children}
    </AllRefContext.Provider>
  );
}
