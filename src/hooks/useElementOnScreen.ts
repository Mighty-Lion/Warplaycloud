import { useEffect } from 'react';

export function useElementOnScreen(
  options: IntersectionObserverInit | undefined,
  containerRef: any
) {
  function callbackFunction(entries: [any]) {
    const [entry] = entries;
    // console.log(entry);
  }

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return { containerRef };
}
