import styled from '@emotion/styled';
import useToggle from '@hooks/useToggle';

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;
interface ToggleProps {
  name?: string;
  on?: boolean;
  disabled?: boolean;
  onChange?: (...data: any) => void;
}

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  background-color: #ccc;
  border-radius: 15px;
  box-sizing: border-box;

  // Toggle Switch
  &:after {
    display: block;
    position: relative;
    left: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    content: '';
  }
`;

const ToggleInput = styled.input`
  display: none;
  // 인접 셀렉터
  &:checked + div {
    background-color: lightgreen;
    transition: all 0.2s;
    &:after {
      transition: all 0.2s;
    }
  }

  &:checked + div:after {
    left: calc(100% - 26px);
    transition: all 0.2s;
    &:after {
      transition: all 0.2s;
    }
  }

  &:disabled + div:after {
    left: calc(100% - 26px);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;

    &:after {
      opacity: 0.7;
    }
  }
`;

const Toggle = ({
  name,
  on = false,
  disabled = false,
  onChange,
}: ToggleProps): JSX.Element => {
  const [checked, toggle] = useToggle(on);
  const handleChange = () => {
    toggle();
    onChange && onChange();
  };
  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        style={{ display: 'none' }}
        checked={checked}
        name={name}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
