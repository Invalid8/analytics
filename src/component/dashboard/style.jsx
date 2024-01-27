import styled from "styled-components";

export const Guker = styled.div`
  display: grid;
  grid-template-rows: 5.5rem 1fr;
`;

export const Bud = styled.div`
  & {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }

  & > div {
    border: 1px solid #edf2f7;
  }
`;

export const Iconic = styled.button`
  & {
    flex-shrink: 0;
    display: flex;
    gap: 0.55rem;
  }

  &:not(.straight) {
    width: 2.5rem;
    height: 2.5rem;

    display: grid;
    place-content: center;
    place-items: center;
  }

  &.straight {
    height: 2.5rem;
    align-items: center;

    position: relative;
  }

  &.straight:after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 1px;
    max-height: 1px;
    min-height: 1px;
    border-radius: 50%;
    width: 100%;
  }

  &.straight.active:after {
    transition: 0.3s ease-in;
    transition-property: width background-color;
    width: 100%;
    background-color: #34caa5;
    box-shadow: 0 0 1.5px #fff;
  }

  /* &.straight.active svg {
    border: 2px solid #34caa5;
    border-radius: 50%;
    padding: 1.2px;
  } */

  &[title]:hover:after {
    background-color: #34caa5;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Sync = styled.div`
  & {
    position: relative;
  }

  @media (min-width: 1241px) {
    & .proof {
      display: none;
    }

    & .hide-me {
      display: none;
    }
  }

  @media (max-width: 1240px) {
    & .screen-m {
      flex-direction: column;
      position: absolute;
      top: 4.5rem;
      right: 1rem;
      align-items: start;

      background-color: #fff;
      border: 1px solid #edf2f7;
      border-radius: 1.25rem;
      padding: 1rem 0.8rem;

      z-index: 1000;

      flex-direction: column-reverse;
      overflow: hidden;

      height: 0;
      visibility: hidden;
    }

    & .screen-m.dark {
      background-color: #171515;
      border-color: #332e2e;
    }

    & .screen-m.show {
      transition: 0.3s ease-in;
      transition-property: height opacity visibility;

      height: fit-content;
      visibility: visible;
    }

    & .screen-m .notice-btn {
      width: 100%;
      border: none !important;
      display: flex;
      gap: 0.5rem;
    }

    & .inner-t {
      position: relative;
      width: 100%;
      top: 0;
      background-color: transparent !important;
      border: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  @media (max-width: 720px) {
    & .search-box {
      width: 100%;
      min-width: 50px;
    }
  }

  @media (max-width: 450px) {
    & .search-box {
      width: 100%;
      max-width: 45px;
      min-width: 45px;
      max-height: 45px;
      min-height: 45px;

      overflow: hidden;
    }

    & .search-box.fuller {
      position: fixed;
      width: 200px;
      height: 50px;
      min-height: 50px;
      min-width: 90%;
      max-height: 260px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 10000;
    }

    & .search-box.fuller input {
      background-color: (225, 223, 223) !important;
    }
  }
`;

export const Table = styled.div`
  width: 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.8fr 0.8fr;
  gap: 1.25rem;
  align-items: center;
  padding: 0 0;
  font-size: 1rem;
  line-height: 1.5rem; /* 150% */

  & > div {
    min-width: 100px;
  }

  &.sub {
    border-top: 2px solid #edf2f6;
    padding: 0.75rem 0;
    width: 100%;
  }

  &.h {
    color: var(--60, #9ca4ab);
    font-weight: 600;
  }

  &.sub .name {
    /* color: #3a3f51; */
    font-weight: 600;
  }

  &.sub .invoice {
    /* color: var(--Main-Colors-Secondary, #0d062d); */
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.375rem;
  }

  &.sub .status > * {
    font-weight: 500;
  }

  &.sub .status .paid {
    color: #34caa5;
  }

  &.sub .status .refund {
    color: var(--Alerts-Error, #ed544e);
  }
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
`;
