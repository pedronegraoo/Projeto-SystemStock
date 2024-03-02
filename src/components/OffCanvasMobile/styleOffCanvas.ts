import styled from "styled-components";

export const WrapperOffCanvas = styled.div`
  /* background-color: green; */
`;

export const BtnMenuMobile = styled.button`
  background-color: var(--backgroundColor);
  border: none;

  .iconMenuMobile {
    font-size: 1.3rem;
    color: var(--color-white);

    &:hover {
      color: var(--color-OffWhite);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  .linkHeader {
    font-size: 1.2rem;
    font-family: var(--font-Barlow);
    color: var(--color-OffWhite);

    padding: 0.6rem;
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      width: 100%;
      text-align: end;
      /* text-decoration: underline; */
      color: var(--color-white);
      background-color: var(--backgroundColorFooter);
    }
  }
`;
