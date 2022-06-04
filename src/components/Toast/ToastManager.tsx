import styled from '@emotion/styled';
import React, { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ToastItem from './ToastItem';

interface Toast {
  id: string;
  message: string;
  duration: number;
}

interface ToastManagerProps {
  bind: (createToast: (message: string, duration: number) => void) => void;
}

const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1500;
`;

const ToastManager: React.FC<ToastManagerProps> = ({ bind }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback((message: string, duration: number) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Container>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          id={id}
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </Container>
  );
};

export default ToastManager;
