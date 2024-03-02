import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const FooterStyled = styled.footer`
  height: 5rem;
  background-color: var(--backgroundColorFooter);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    font-family: var(--font-Barlow);
    color: var(--color-OffWhite);
    margin: 0;
  }

  @media ${breakpoints.lg} {
    p {
      font-size: 0.7rem;
    }
  }

  @media ${breakpoints.sm} {
    p {
      font-size: 0.6rem;
    }
  }
`;
