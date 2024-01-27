/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Invoice = ({ invoice }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="Invoice z-[1000] customer-invoice min-w-[280px] w-full sm:w-[480px] md:w-[540px] h-full bg-[#FFF] dark:bg-[#1c1919] dark:text-[#fff] rounded-[0.875rem] p-[1.25rem] flex flex-col gap-[1.25rem] max-h-full overflow-hidden"
      style={{
        border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
      }}
    >
      <div className="heager">
        <div className="logo flex items-center gap-[0.65rem] justify-center flex-col">
          <div className="f flex items-center gap-[0.45rem]">
            <img src="/turbo.svg" alt="logo" />
            <span className="company font-medium">GeegPay</span>
          </div>
          <h3 className="text-2xl font-semibold font-mono">Invoice</h3>
        </div>
        <div className="body flex flex-col gap-4 w-full h-full max-h-[400px] overflow-auto custom-scroll-bar">
          <div className="customer-p flex flex-col gap-2 text-lg">
            <div
              className="row flex gap-2"
              style={{
                borderBottom: `1px solid ${
                  theme !== "dark" ? "#E1DFDF" : "#332e2e"
                }`,
              }}
            >
              <span className="q font-mono text-xl">Customer</span>
            </div>
            <div className="row flex gap-2">
              {/* <span className="q font-mono">Image:</span> */}
              <span className="a w-[2.8rem] h-[2.8rem]">
                <img
                  src={invoice.profile.image}
                  className="w-full h-full"
                  alt="..."
                />
              </span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Name:</span>
              <span className="a">{invoice.profile.name}</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Address:</span>
              <span className="a">11 Rindall Street, USA</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">ID:</span>
              <span className="a">dsf12334duodds2wisds</span>
            </div>
          </div>
          <div className="product-p flex flex-col gap-2 text-lg">
            <div
              className="row flex gap-2"
              style={{
                borderBottom: `1px solid ${
                  theme !== "dark" ? "#E1DFDF" : "#332e2e"
                }`,
              }}
            >
              <span className="q font-mono text-xl">Product</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Name:</span>
              <span className="a">Iphone XR - ( 33 Pro X )</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">ID:</span>
              <span className="a">Adfdgsfj34824h</span>
            </div>

            <div className="row flex gap-2">
              <span className="q font-mono">Quantity:</span>
              <span className="a">1</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Price:</span>
              <span className="a">$535,456</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Image:</span>
              <span className="a w-full">
                <img src="/turbo.svg" alt="product" />
              </span>
            </div>
          </div>
          <div className="transaction-p flex flex-col gap-2 text-lg">
            <div
              className="row flex gap-2"
              style={{
                borderBottom: `1px solid ${
                  theme !== "dark" ? "#E1DFDF" : "#332e2e"
                }`,
              }}
            >
              <span className="q font-mono text-xl">Transaction</span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Status:</span>
              <span
                className={`a ${
                  invoice.success ? "text-[#34caa5]" : "text-[#ed544e]"
                }`}
              >
                {invoice.success ? "Success" : "Failed"}
              </span>
            </div>
            <div className="row flex gap-2">
              <span className="q font-mono">Code:</span>
              <span className={"a"}>sdafs42563565grrsdf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
