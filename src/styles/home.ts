import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const WrapperHome = styled.div`
  h1 {
    font-family: var(--font-Oswald);
  }
`;

export const WrapperCardHome = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  place-items: center;
  gap: 1.5rem;

  margin-bottom: 1.5rem;

  @media ${breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
