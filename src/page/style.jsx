import styled from "styled-components";

export const Dash = styled.div`
  & {
    display: grid;
    grid-template-columns: 5rem 1fr;
  }

  @media (min-width: 541px) {
    &.full-lg {
      grid-template-columns: 0 1fr;
    }
  }

  @media (max-width: 540px) {
    &.full {
      grid-template-columns: 0 1fr;
    }
  }
`;
