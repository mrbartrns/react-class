import React from 'react';

interface ICheckbox {
  label?: string;
  on?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, on, onChange }: ICheckbox): JSX.Element => {
  console.log(label, on);
  return (
    <label>
      {label}
      <input type="checkbox" defaultChecked={on} onChange={onChange} />
    </label>
  );
};

export default React.memo(Checkbox);
