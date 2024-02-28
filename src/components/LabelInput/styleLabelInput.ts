import styled from "styled-components";

export const ContentLabelInput = styled.div`
  width: 20rem;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    font-size: 1.2rem;
    font-family: var(--font-Oswald);
    color: var(--color-white);
  }

  input {
    width: 100%;
    height: 2.2rem;

    color: var(--color-white);
    background-color: var(--color-input);
    padding-inline: 0.7rem;
    border: none;
    border-radius: 0.5rem;
    /* outline: 1px solid #a5b6a5; */
    outline-color: #a5b6a5;
  }
`;
