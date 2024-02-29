import styled from "styled-components";

export const Form = styled.form`
  /* background-color: darkseagreen; */
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  margin-top: 1rem;

  label {
    font-size: 1.2rem;
    font-family: var(--font-Oswald);
    color: var(--color-white);
    text-transform: capitalize;
  }

  select {
    width: 100%;
    height: 2.2rem;

    color: var(--color-white);
    background-color: var(--color-input);
    border: none;
    outline-color: #a5b6a5;
  }

  textarea {
    width: 100%;
    height: 10rem;

    color: var(--color-white);
    background-color: var(--color-input);
    padding: 0.5rem 0.7rem;
    border: none;
    resize: none;
    outline-color: #a5b6a5;
  }
`;

export const WrapperBtnSubmit = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 1rem;
`;

export const BtnSave = styled.button`
  width: 6rem;
  height: 3rem;

  font-size: 1rem;
  font-family: var(--font-Oswald);
  color: var(--color-white);
  background-color: var(--color-input);

  text-transform: uppercase;
  border: none;
  border-radius: 0.5rem;

  transition: all 0.2s ease;

  &:hover {
    color: var(--color-input);
    background-color: var(--color-white);
  }
`;
