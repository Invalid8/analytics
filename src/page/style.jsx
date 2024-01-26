import styled from "styled-components";

export const Dash = styled.div`
  & {
    display: grid;
    grid-template-columns: 5rem 1fr;
  }

  &.full {
    grid-template-columns: 0 1fr;
  }
`;
