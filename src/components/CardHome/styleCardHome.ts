import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperCardHome = styled.div`
  width: 25rem;
  height: 15rem;
  background-color: var(--color-card);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: var(--font-Oswald);
  color: var(--color-white);

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .contentTitle {
    width: 100%;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: capitalize;
  }

  .contentNumber {
    width: 100%;
    text-align: center;
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;
