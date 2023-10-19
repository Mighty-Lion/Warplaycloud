import { CheckboxContainer } from '@/components/Checkbox/index.styles';

export interface ICheckboxProps {
  id: string;
  onChange?: (arg0: any) => void;
}
export function Checkbox({ id, onChange }: ICheckboxProps) {
  return (
    <CheckboxContainer>
      <input type="checkbox" onChange={onChange} id={id} />
      <label htmlFor={id} />
    </CheckboxContainer>
  );
}
