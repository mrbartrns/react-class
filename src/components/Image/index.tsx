import { useEffect, useState } from 'react';
import useIntersect from '@hooks/useIntersect';

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  mode?: 'cover' | 'fill' | 'contain';
  block?: boolean;
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  style?: { [key: string]: unknown };
}

const LOAD_IMAGE = 'LOAD_IMAGE' as const;

// threshold: 화면에 얼만큼 들어와야 로딩이 될 것인가??
const Image = ({
  src,
  width,
  height,
  alt,
  block,
  mode = 'cover',
  lazy = false,
  placeholder,
  threshold,
  ...props
}: ImageProps): JSX.Element => {
  const imgStyle = {
    width,
    height,
    objectFit: mode,
    display: block ? 'block' : undefined,
  };
  const [loaded, setLoaded] = useState(false);
  const imgRef = useIntersect<HTMLImageElement>(
    lazy,
    (entry, observer) => {
      observer.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMAGE));
    },
    threshold,
  );

  const onLoadImage = () => setLoaded(true);

  // 이미지 로딩 실행
  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return undefined;
    }
    const imgElement = imgRef.current;
    if (imgElement) imgElement.addEventListener(LOAD_IMAGE, onLoadImage);
    return () => {
      if (imgElement) imgElement.removeEventListener(LOAD_IMAGE, onLoadImage);
    };
  }, [imgRef, lazy]);

  return (
    <img
      src={loaded ? src : placeholder}
      alt={alt}
      ref={imgRef}
      style={{ ...imgStyle, ...props.style }}
    />
  );
};

export default Image;
