import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import useClickAway from '@hooks/useClickAway';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  visible?: boolean;
  onClose?: (e?: MouseEvent | TouchEvent) => void;
  style?: { [key: string]: unknown };
}

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Modal: React.FC<ModalProps> = ({
  children,
  width = 500,
  height,
  visible = false,
  onClose,
  ...props
}) => {
  const containerStyle = useMemo(() => ({ width, height }), [width, height]);
  // ANCHOR: React portal
  const el = useMemo(() => document.createElement('div'), []);
  const ref = useClickAway<HTMLDivElement>((e) => {
    if (onClose) onClose(e);
  });
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);
  // 모달은 항상 최상위 트리에 있어야 함 body 바로 아래
  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

export default Modal;
