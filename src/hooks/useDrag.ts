import { useCallback, useState } from 'react';

const useDrag = () => {
  const [dragging, setDragging] = useState(false);
  const onDragEnter = useCallback(
    (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
      // prevent browser's default event
      e.preventDefault();
      // prevent event propagation from child to parent
      e.stopPropagation();

      if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
        setDragging(true);
      }
    },
    [],
  );
  const onDragLeave = useCallback(
    (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
      // prevent browser's default event
      e.preventDefault();
      // prevent event propagation from child to parent
      e.stopPropagation();
    },
    [],
  );
  const onDragOver = useCallback(
    (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
      // prevent browser's default event
      e.preventDefault();
      // prevent event propagation from child to parent
      e.stopPropagation();
    },
    [],
  );
  const onDragDrop = useCallback(
    (
      e: DragEvent | React.DragEvent<HTMLDivElement>,
      onChange?: React.Dispatch<React.SetStateAction<File | undefined>>,
    ) => {
      // prevent browser's default event
      e.preventDefault();
      // prevent event propagation from child to parent
      e.stopPropagation();

      const file = e.dataTransfer?.files;
      if (!file) return;
      const changedFile = file[0];
      if (onChange) onChange(changedFile);
      setDragging(false);
    },
    [],
  );
  return { dragging, onDragEnter, onDragLeave, onDragOver, onDragDrop };
};
export default useDrag;
