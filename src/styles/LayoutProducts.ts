import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const WrapperLayoutProducts = styled.div`
  /* 
  height: 100vh; */
`;

export const WrapperContentLayoutProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;

  h1 {
    color: var(--color-white);
    text-align: center;
    font-family: var(--font-Oswald);
  }

  @media ${breakpoints.sm} {
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export const WrapperLinkInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperLink = styled.div`
  display: flex;
  gap: 1rem;

  .linkLayout {
    font-size: 1.2rem;
    font-family: var(--font-Barlow);
    color: var(--color-OffWhite);
    text-decoration: none;

    padding-bottom: 0.5rem;

    transition: color 0.1s ease;

    &:hover {
      color: var(--color-white);
    }
  }

  .active {
    border-bottom: 3px solid #ccc;
  }

  @media ${breakpoints.md} {
    .linkLayout {
      font-size: 1.1rem;
    }
  }

  @media ${breakpoints.sm} {
    gap: 0.7rem;

    .linkLayout {
      font-size: 0.9rem;
    }
  }
`;

export const WrapperInputFilter = styled.div`
  width: 15rem;

  @media ${breakpoints.md} {
    width: 35%;
  }
`;
