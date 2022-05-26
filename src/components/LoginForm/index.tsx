import { FormEvent } from 'react';
import Input from '@components/Input';
import { Form, FormTitle } from '@components/Form';
import Button from '@components/Button';
import { useForm } from '@hooks/useForm';

interface LoginFormProps {
  onSubmit?: (...data: any) => void;
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(0), 1000);
  });
};

const LoginForm = (): JSX.Element => {
  const { state, errors, handleChange, handleSubmit, isLoading } = useForm({
    initialState: {
      name: '',
      password: '',
    },
    onSubmit: async () => {
      await sleep();
      console.log('on submit');
    },
    validate: ({ name, password }) => {
      const newErrors: { [key: string]: any } = {};
      if (!name) newErrors.name = '이름을 입력하세요.';
      if (!password) newErrors.password = '비밀번호를 입력하세요.';
      return newErrors;
    },
  });

  console.log(state, errors, isLoading);

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <div>
        email:{' '}
        <Input
          type="text"
          placeholder="email"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        password:{' '}
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
