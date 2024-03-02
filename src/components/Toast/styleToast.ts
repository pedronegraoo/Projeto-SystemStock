import styled from "styled-components";

export const WrapperToast = styled.div`
  position: fixed;
  top: 2rem;
  right: 1rem;

  color: var(--color-white);

  .iconToastSuccess {
    font-size: 1.3rem;
    color: var(--color-green);
  }

  .iconToastSecondary {
    font-size: 1.3rem;
    color: gray;
  }

  .toast {
    width: 17rem;

    .textToast {
      font-size: 1rem;
      font-family: var(--font-Barlow);
    }
  }
`;
