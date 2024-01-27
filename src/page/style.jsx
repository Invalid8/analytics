import styled from "styled-components";

export const Dash = styled.div`
  & {
    display: grid;
    grid-template-columns: 5.5rem 1fr;
  }

  &.full-nav {
    grid-template-columns: 11.5rem 1fr;
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

    &.full-nav {
      display: flex;
      flex-direction: column;
    }

    & .s-veil {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #0000003a;
    }
  }

  & .tool-tip-btn {
    left: 1rem;
  }

  &.opened .tool-tip-btn {
    left: 5.5rem;
  }

  &.opened.full-nav .tool-tip-btn {
    left: 11rem;
  }
`;
