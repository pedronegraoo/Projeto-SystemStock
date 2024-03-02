import styled from "styled-components";
import breakpoints from "../responsive/breakpoints";

export const WrapperShowProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2.7rem;
    font-family: var(--font-Oswald);
    letter-spacing: 1px;
    color: var(--color-white);
    /* margin-right: 0.5rem; */
    text-transform: capitalize;
  }

  .linkShowProduct {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-family: var(--font-Oswald);
    letter-spacing: 1px;
    color: var(--color-black);

    border-radius: 0.3rem;
    background-color: var(--color-OffWhite);
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .linkDeleteProduct {
    font-size: 1rem;
    font-family: var(--font-Oswald);
    letter-spacing: 1px;
    color: var(--color-black);
    background-color: var(--color-red);
    padding: 0.5rem 1rem;
    text-decoration: none;

    border: none;
    border-radius: 0.3rem;

    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-family: var(--font-Oswald);
    letter-spacing: 1px;
    color: var(--color-black);
    background-color: var(--color-red);
    text-decoration: none;

    border: none;
    border-radius: 0.3rem;

    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media ${breakpoints.lg} {
    h1 {
      font-size: 2.5rem;
    }

    .linkShowProduct,
    button {
      font-size: 0.9rem;
      padding: 0.5rem 0.9rem;
    }
  }

  @media ${breakpoints.sm} {
    gap: 0.7rem;

    h1 {
      font-size: 2.1rem;
    }

    .linkShowProduct,
    button {
      font-size: 0.8rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  span {
    font-size: 1.1rem;
    font-family: var(--font-Barlow);
    color: var(--color-white);

    padding: 0.5rem 2rem;

    background-color: #242424;
    border-radius: 0.3rem;
  }

  @media ${breakpoints.lg} {
    gap: 1rem;

    span {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }

  @media ${breakpoints.md} {
    span {
      font-size: 0.9rem;
      padding: 0.5rem 0.9rem;
    }
  }

  @media ${breakpoints.sm} {
    gap: 0.8rem;

    span {
      font-size: 0.7rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;

export const ContentDescricao = styled.div`
  font-family: var(--font-Barlow);
  color: var(--color-white);

  margin-top: 0.5rem;

  h5 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
  }

  @media ${breakpoints.lg} {
    h5 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.md} {
    h5 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media ${breakpoints.sm} {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const WrapperDates = styled.div`
  font-size: 1.2rem;
  font-family: var(--font-Barlow);
  color: var(--color-white);

  margin-top: 1rem;

  display: flex;
  gap: 2rem;

  @media ${breakpoints.lg} {
    font-size: 1rem;
  }

  @media ${breakpoints.md} {
    font-size: 0.9rem;
  }

  @media ${breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
