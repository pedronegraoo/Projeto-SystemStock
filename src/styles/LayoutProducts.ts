import styled from "styled-components";

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
`;
