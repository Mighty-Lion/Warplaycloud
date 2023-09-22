import { CheckboxContainer } from '@/components/Checkbox/index.styles';

export interface ICheckboxProps {
  id: string;
}
export function Checkbox({ id }: ICheckboxProps) {
  return (
    <CheckboxContainer>
      <input type="checkbox" id={id} />
      <label htmlFor={id} />
    </CheckboxContainer>
  );
}
