import useForm from '@hooks/useForm';

export default {
  title: 'Hooks/useForm',
};

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(0), 1000);
  });
};

export const Default = () => {
  const { values, isLoading, handleChange, handleSubmit } = useForm<{
    [key: string]: unknown;
  }>({
    initialValues: {},
    onSubmit: async (value) => {
      await sleep();
      console.log(JSON.stringify(value));
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="id" placeholder="id" onChange={handleChange} />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value={isLoading ? 'isLoading...' : '제출'}
        disabled={isLoading}
      />
      <div>
        {Object.keys(values).map((value) => {
          return <div key={value}>{`${value}: ${values[value]}`}</div>;
        })}
      </div>
    </form>
  );
};
