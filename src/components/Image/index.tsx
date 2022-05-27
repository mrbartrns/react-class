import { useEffect, useRef, useState } from 'react';

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
  [extraProps: string]: any;
}

const LOAD_IMAGE = 'LOAD_IMAGE' as const;

// 재렌더링되더라도 observer가 재생성되지 않도록 모듈 내에서 전역으로 사용
let observer: IntersectionObserver | null = null;
const intersectionObserverCallback: IntersectionObserverCallback = (
  entries,
  io,
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMAGE));
    }
  });
};

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
  const imgRef = useRef<HTMLImageElement>(null);

  const onLoadImage = () => setLoaded(true);

  // 이미지 로딩 실행
  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }
    const imgElement = imgRef.current;
    imgElement && imgElement.addEventListener(LOAD_IMAGE, onLoadImage);
    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMAGE, onLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;
    if (!observer)
      observer = new IntersectionObserver(intersectionObserverCallback, {
        threshold,
      });
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

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
