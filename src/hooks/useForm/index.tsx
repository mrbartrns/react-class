import React, { useState } from 'react';

interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (data?: T) => Promise<T | void> | void;
  validate?: (data?: T) => { [key: string]: unknown };
}
const useForm = <T extends { [key: string]: unknown }>({
  initialValues,
  onSubmit,
  validate,
}: UseFormProps<T>) => {
  // 내부적으로 로딩중인지 확인하는 로직이 필요하다.
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: unknown }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }
    setErrors(newErrors);
    setIsLoading(false);
  };
  return { values, errors, isLoading, handleChange, handleSubmit };
};

export default useForm;
