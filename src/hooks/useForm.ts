import { ChangeEvent, FormEvent, useState } from 'react';

interface UseFormProps {
  initialState: { [key: string]: any };
  onSubmit: (...data: any) => Promise<any> | void;
  validate: (...data: any) => { [key: string]: any };
}
export const useForm = ({ initialState, onSubmit, validate }: UseFormProps) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: any }>({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    // thorw Error 처리하는 것이 더 좋지 않나?
    const newErrors = validate(state);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit();
    } else {
      setErrors(newErrors);
    }
    setIsLoading(false);
  };
  return { state, errors, isLoading, handleChange, handleSubmit };
};
