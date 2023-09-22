import styled from '@emotion/styled';

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;

  label {
    display: flex;
    cursor: pointer;
    outline: none;
  }

  label::before {
    content: '';
    width: 24px;
    height: 24px;
    background: var(--color-white-0);
    outline: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    outline: none;
  }

  input:checked {
    & + label::before {
      content: '\\002714';
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
    }
  }
`;
