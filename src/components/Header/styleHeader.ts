import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

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

  @media ${breakpoints.md} {
    .nameSytem {
      font-size: 1.8rem;
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

  @media ${breakpoints.md} {
    display: none;

    .linkHeader {
      font-size: 1.1rem;
    }
  }
`;

export const WrapperMenuMobile = styled.div`
  display: none;

  @media ${breakpoints.md} {
    display: block;
  }
`;
