import { forwardRef, useEffect } from 'react';

export const Input = forwardRef<HTMLInputElement>((_, ref) => {
  useEffect(() => {
    if (ref && Object.prototype.hasOwnProperty.call(ref, 'current')) {
    }
  }, [ref]);
  return <input ref={ref} name="test" />;
});
