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
