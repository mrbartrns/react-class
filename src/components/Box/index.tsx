import { useEffect, useState } from 'react';
import useIntersect from '@hooks/useIntersect';

const LOADED = 'LOADED' as const;

interface BoxProps {
  [extraProps: string]: any;
}

const Box = ({ ...props }: BoxProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const onIntersect = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => {
    entry.target.dispatchEvent(new CustomEvent(LOADED));
  };
  const onLoaded = () => setLoaded(true);
  const ref = useIntersect<HTMLDivElement>(onIntersect, 0.5);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(LOADED, onLoaded);
    }
    return () => {
      ref.current?.removeEventListener(LOADED, onLoaded);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        backgroundColor: loaded ? 'royalblue' : 'rosybrown',
      }}
      {...props}
    />
  );
};

export default Box;
