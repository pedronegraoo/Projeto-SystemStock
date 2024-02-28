import styled from "styled-components";

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
    margin-right: 0.5rem;
    text-transform: capitalize;
  }

  .linkShowProduct {
    font-size: 1rem;
    font-family: var(--font-Oswald);
    letter-spacing: 1px;
    color: var(--color-black);
    padding: 0.5rem 1rem;

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
`;

export const WrapperDates = styled.div`
  font-size: 1.2rem;
  font-family: var(--font-Barlow);
  color: var(--color-white);

  margin-top: 1rem;

  display: flex;
  gap: 2rem;
`;
