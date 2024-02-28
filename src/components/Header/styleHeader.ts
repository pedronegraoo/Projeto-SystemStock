import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--backgroundColor);
  width: 100%;
  height: 5rem;

  padding: 3rem 4%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nameSytem {
    font-size: 2rem;
    font-family: var(--font-Anta);
    color: var(--color-white);
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      color: var(--color-OffWhite);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  .linkHeader {
    font-size: 1.2rem;
    font-family: var(--font-Barlow);
    color: var(--color-OffWhite);

    padding: 0.6rem;
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      /* text-decoration: underline; */
      color: var(--color-white);
      background-color: var(--backgroundColorFooter);
    }
  }
`;
