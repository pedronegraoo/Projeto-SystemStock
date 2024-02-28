import styled from "styled-components";

export const WrapperCardPreview = styled.div`
  width: 25rem;
  height: 15rem;
  padding: 1.2rem 1rem;
  background-color: var(--color-card);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: var(--font-Oswald);
  color: var(--color-white);

  .linkShowMore {
    font-size: 1.2rem;
    color: var(--color-blue);
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const WrapprerContentCardPreview = styled.div`
  /* background-color: green; */
  width: 100%;

  display: flex;
  flex-direction: column;

  .contentCard {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }
`;
