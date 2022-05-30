import { ComponentMeta, ComponentStory } from '@storybook/react';
import Upload from '@components/Upload';

export default {
  title: 'Component/Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

export const Default: ComponentStory<typeof Upload> = (args) => {
  return (
    <Upload {...args}>
      <button type="button">Click me</button>
    </Upload>
  );
};

export const AccessFile: ComponentStory<typeof Upload> = (args) => {
  return (
    <Upload {...args}>
      {(file) => <button type="button">{file ? file.name : 'Click me'}</button>}
    </Upload>
  );
};

export const Droppable: ComponentStory<typeof Upload> = (args) => {
  return (
    <Upload droppable {...args}>
      {(file?: File, dragging?: boolean) => {
        return (
          <div
            style={{
              width: 300,
              height: 300,
              border: `4px dashed #aaa`,
              borderColor: dragging ? 'black' : '#aaa',
            }}
          >
            {file ? file.name : 'Click or drag file to this area to upload'}
          </div>
        );
      }}
    </Upload>
  );
};
