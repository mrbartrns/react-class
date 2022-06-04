import Toast from '.';

export default {
  title: 'Component/Toast',
};

export const Default = () => {
  return (
    <button type="button" onClick={() => Toast.show('안녕하세요', 3000)}>
      Show Toast
    </button>
  );
};
