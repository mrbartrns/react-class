import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '@components/Modal';
import { useState } from 'react';

export default {
  title: 'Component/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// ANCHOR: portal

export const Default: ComponentStory<typeof Modal> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setVisible(true)}>
        ShowModal
      </button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        Hi!
      </Modal>
    </div>
  );
};
