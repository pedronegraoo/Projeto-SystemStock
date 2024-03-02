import styled from "styled-components";

export const WrapperDropDown = styled.div`
  /*  */
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  .linkHeader {
    width: 100%;
    font-size: 1.2rem;
    font-family: var(--font-Barlow);
    text-align: end;
    color: var(--color-OffWhite);

    padding: 0.5rem;
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      color: var(--color-white);
      background-color: var(--backgroundColorFooter);
    }
  }
`;
