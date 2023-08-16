import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useRef,
} from 'react';

export interface IAllRefContextProps {
  refCloud: MutableRefObject<null>;
  refBegin: MutableRefObject<null>;
  refRates: MutableRefObject<null>;
  refDevices: MutableRefObject<null>;
}

export const AllRefContext = createContext<IAllRefContextProps>(null!);
export function AllRefProvaider({ children }: PropsWithChildren) {
  const refCloud = useRef(null);
  const refBegin = useRef(null);
  const refRates = useRef(null);
  const refDevices = useRef(null);
  return (
    <AllRefContext.Provider
      value={{ refCloud, refBegin, refRates, refDevices }}
    >
      {children}
    </AllRefContext.Provider>
  );
}
