import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import useDrag from '@hooks/useDrag';

interface UploadProps {
  children:
    | React.ReactNode
    | ((file?: File, dragging?: boolean) => React.ReactNode);
  name: string;
  accept?: string;
  value?: File;
  droppable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  display: none;
`;

/**
 * drag and drop이 가능한 파일 업로드 상자 만들기
 * 이를 가능하게 하기 위해서는 draggable한지 프롭이 필요하다.
 */
const Upload: React.FC<UploadProps> = ({
  children,
  name,
  accept,
  value,
  droppable = false,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState(value);
  const { dragging, onDragEnter, onDragDrop, onDragLeave, onDragOver } =
    useDrag();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const changedFile = files[0];
    setFile(changedFile);
    if (onChange) onChange(e);
  };

  const handleChooseFile = () => {
    inputRef?.current?.click();
  };

  // droppable 이벤트를 구현하기 위해서는 4가지의 이벤트가 필요
  // 이는 모두 side effect이므로 useEffect에서 처리해준다.
  const handleDragEnter = (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;
    onDragEnter(e);
  };
  const handleDragLeave = (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;
    onDragLeave(e);
  };
  const handleDragOver = (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;
    onDragOver(e);
  };
  const handleDragDrop = (e: DragEvent | React.DragEvent<HTMLDivElement>) => {
    if (!droppable) return;
    onDragDrop(e, setFile);
  };

  return (
    <div
      onClick={handleChooseFile}
      onDrop={handleDragDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input
        type="file"
        ref={inputRef}
        accept={accept}
        name={name}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </div>
  );
};

export default Upload;
