import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const ContentLabelInput = styled.div`
  width: 20rem;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    font-size: 1.2rem;
    font-family: var(--font-Oswald);
    color: var(--color-white);
    text-transform: capitalize;
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
    text-transform: capitalize;
  }

  @media ${breakpoints.xl} {
    width: 15rem;
  }

  @media ${breakpoints.lg} {
    width: 12rem;
  }

  @media ${breakpoints.md} {
    width: 100%;
  }

  @media ${breakpoints.sm} {
    label {
      font-size: 1.1rem;
    }

    input {
      font-size: 0.9rem;
    }
  }
`;
