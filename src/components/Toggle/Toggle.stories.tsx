import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from '@components/Toggle';

export default {
  title: 'Component/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = () => <Toggle />;
