/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { sort } from "../dashboard/submain/SalesTrends";

const Select = ({ className, style, list, setSortBy }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <List className={`select-box ${className}`} style={style}>
      <div
        className="select-box__current flex items-center justify-center"
        tabIndex="1"
      >
        {list.slice(0).map((item, index) => {
          return (
            <div className="select-box__valu" key={item.id ? item.id : index}>
              <input
                className="select-box__input"
                type="radio"
                id={item.value}
                value={item.value}
                name="Ben"
                onChange={() => {
                  switch (item.value) {
                    case "daily":
                      setSortBy(sort.daily);
                      break;
                    case "weekly":
                      setSortBy(sort.weekly);
                      break;
                    case "monthly":
                      setSortBy(sort.monthly);
                      break;
                    case "yealy":
                      setSortBy(sort.yealy);
                      break;

                    default:
                      setSortBy(sort.daily);
                      break;
                  }
                  setSortBy();
                }}
                checked={index === 0}
              />
              <p className="select-box__input-text">{item.text}</p>
            </div>
          );
        })}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"
            fill={theme !== "dark" ? "black" : "white"}
          />
        </svg>
      </div>
      <ul
        className="select-box__list bg-[#fff] dark:bg-[#332e2e] dark:text-[#fff] rounded-sm"
        style={{
          border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
        }}
      >
        {list.map((item, index) => {
          return (
            <li key={item.id ? item.id : index}>
              <label
                className="select-box__option bg-[#fff] hover:dark:bg-[#171515] hover:dark:text-[#fff]"
                htmlFor={item.value}
                aria-hidden="aria-hidden"
              >
                {item.text}
              </label>
            </li>
          );
        })}
      </ul>
    </List>
  );
};

const List = styled.div`
  .select-box {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    font-size: 18px;
    color: #60666d;
    overflow: hidden;
  }
  /* @media (min-width: 768px) {
    .select-box {
      width: 70%;
    }
  }
  @media (min-width: 992px) {
    .select-box {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    .select-box {
      width: 30%;
    }
  } */
  .select-box__current {
    position: relative;
    /* box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1); */
    cursor: pointer;
    outline: none;
  }
  .select-box__current:focus + .select-box__list {
    opacity: 1;
    -webkit-animation-name: none;
    animation-name: none;
  }
  .select-box__current:focus + .select-box__list .select-box__option {
    cursor: pointer;
  }
  .select-box__current:focus .select-box__icon {
    transform: translateY(-50%) rotate(180deg);
  }
  .select-box__icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 20px;
    opacity: 0.3;
    transition: 0.2s ease;
  }
  .select-box__value {
    display: flex;
  }
  .select-box__input {
    display: none;
  }
  .select-box__input:checked + .select-box__input-text {
    display: block;
  }
  .select-box__input-text {
    display: none;
    width: 100%;
    margin: 0;
    padding: 4px 8px;
    background-color: inherit;
    text-transform: capitalize;
    font-weight: 500;
  }
  .select-box__list {
    position: absolute;
    width: 100%;
    max-width: 100px;

    padding: 0;
    list-style: none;
    opacity: 0;
    -webkit-animation-name: HideList;
    animation-name: HideList;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: step-start;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);

    text-transform: capitalize;
    z-index: 1000000;
  }
  .select-box__option {
    display: block;
    padding: 10px;
    background-color: inherit;
  }
  .select-box__option:hover,
  .select-box__option:focus {
    color: #546c84;
  }

  @-webkit-keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
`;

export default Select;
