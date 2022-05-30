import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from '@components/Badge';

export default {
  title: 'Component/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
);

export const Sample: ComponentStory<typeof Badge> = (args) => {
  return (
    <Badge {...args}>
      <div
        style={{
          width: 30,
          height: 30,
          border: `1px solid black`,
          borderRadius: 8,
          backgroundColor: 'royalblue',
        }}
      >
        div
      </div>
    </Badge>
  );
};
