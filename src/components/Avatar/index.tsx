import React, { useState, useEffect } from 'react';
import ImageComponent from '@components/Image';
import styled from '@emotion/styled';

/**
 * ANCHOR:아바타 컴포넌트는 사용자의 프로필 사진을 나타내는데 사용된다.s
 */
interface AvatarProps {
  src: string;
  lazy?: boolean;
  threshold?: number;
  size?: number;
  shape?: 'circle' | 'round' | 'square';
  placeholder?: string;
  alt: string;
  mode?: 'cover';
}

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-flex;
  border: 1px solid #dadada;
  border-radius: ${({ shape }: { shape: 'circle' | 'round' | 'square' }) => {
    if (shape === 'circle') return '50%';
    if (shape === 'round') return '1rem';
    return '0';
  }};
  overflow: hidden;
  box-sizing: border-box;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;

/**
 * ANCHOR: IMAGE에 직접 opacity를 걸면 효과가 없고, image loaded가 완료된 뒤 wrapper에 걸어줘야 한다.
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  lazy,
  threshold,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'cover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);
  return (
    <AvatarWrapper shape={shape} {...props}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
