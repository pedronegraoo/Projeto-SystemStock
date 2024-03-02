import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperTable = styled.table`
  width: 100%;

  .titleTable {
    height: 4rem;
    background-color: var(--color-toptable);
    color: var(--color-white);
    text-transform: capitalize;

    text-align: center;

    th {
      font-size: 1.2rem;
      font-family: var(--font-Oswald);
      /* padding-left: 1rem; */
    }
  }

  .contentTable {
    height: 4rem;
    background-color: var(--color-table);
    text-transform: capitalize;

    text-align: center;

    transition: all 0.2s ease;

    td {
      font-size: 1.1rem;
      color: var(--color-white);
      font-family: var(--font-Barlow);
      /* padding-left: 1rem; */
    }

    &:hover {
      opacity: 0.9;
    }

    td:last-child {
      height: 4rem;

      font-size: 1.5rem;
      color: var(--color-white);

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .linkShow {
        color: var(--color-blue);
      }

      .linkEdit {
        color: var(--color-white);
      }

      .btnRemove {
        color: var(--color-red);
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }

  @media ${breakpoints.md} {
    .titleTable {
      th {
        font-size: 1rem;
      }
    }

    .contentTable {
      td {
        font-size: 0.9rem;
      }

      td:last-child {
        font-size: 1.3rem;
      }
    }
  }

  @media ${breakpoints.sm} {
    .titleTable {
      th {
        font-size: 0.9rem;
      }
    }

    .contentTable {
      td {
        font-size: 0.8rem;
      }

      td:last-child {
        font-size: 1.1rem;
      }
    }
  }
`;
