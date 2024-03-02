import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperCardPreview = styled.div`
  width: 25rem;
  height: 15rem;
  /* padding: 1.2rem 1rem; */
  padding: 1rem;
  background-color: var(--color-card);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: var(--font-Oswald);
  color: var(--color-white);

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .linkShowMore {
    width: 100%;
    padding-block: 0.3rem;
    text-align: center;
    border-radius: 0.2rem;

    font-size: 1.2rem;
    color: var(--color-card);
    background-color: var(--color-white);
    text-transform: uppercase;
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      color: var(--color-white);
      background-color: var(--backgroundColor);
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

export const WrapperContentCardPreview = styled.div`
  width: 100%;
  text-transform: capitalize;

  display: flex;

  .contentName {
    width: 50%;
  }

  .contentCategory {
    width: 50%;
    text-align: end;
  }

  .contentQuantity {
    width: 50%;
    text-align: end;
  }
`;
