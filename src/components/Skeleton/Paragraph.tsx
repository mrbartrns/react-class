import React from 'react';
import Box from './Box';

interface ParagraphProps {
  line?: number;
}

const Paragraph: React.FC<ParagraphProps> = ({ line = 3, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) => {
        return index !== line - 1 ? (
          <Box width="100%" height={16} key={index} />
        ) : (
          <Box width="64%" height={16} key={index} />
        );
      })}
    </div>
  );
};

export default Paragraph;
