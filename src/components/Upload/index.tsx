import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

interface UploadProps {
  children: React.ReactNode | ((file?: File) => React.ReactNode);
  name: string;
  accept?: string;
  value?: File;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  display: none;
`;

const Upload: React.FC<UploadProps> = ({
  children,
  name,
  accept,
  value,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState(value);

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
  return (
    <div onClick={handleChooseFile} {...props}>
      <Input
        type="file"
        ref={inputRef}
        accept={accept}
        name={name}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file) : children}
    </div>
  );
};

export default Upload;
