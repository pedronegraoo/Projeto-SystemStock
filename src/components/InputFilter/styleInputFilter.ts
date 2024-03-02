import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const InputFil = styled.input`
  width: 100%;
  padding: 0.4rem 0.5rem;

  font-size: 1rem;
  font-family: var(--font-Barlow);
  color: var(--backgroundColor);
  background-color: var(--color-white);

  /* background-color: var(--backgroundColor);
  color: var(--color-white);
  border: 2px solid var(--color-white); */

  border: none;
  border-radius: 0.3rem;
  outline: none;

  @media ${breakpoints.md} {
    font-size: 0.9rem;
  }
  @media ${breakpoints.md} {
    font-size: 0.8rem;
  }
`;
