import React, { useState } from "react";
import balloon from "../assets/images/ballon.png";
import Button from "./UI/Button";
// import { useStateContext } from "../contexts/ContextProvider";

const ItemCard = ({ rows }) => {
  // const { users } = useStateContext();

  const [filterValue, setFilterValue] = useState("");
  return (
    <div className=" mx-auto max-w-[720px] px-0 sm:px-0">
      <div className="">
        <div className="mb-0 xl:mb-2 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl sm:text-3xl text-[#494949] font-semibold leading-tight">
            Items
          </h2>
          <div className="mt-6 sm:mt-0 text-end">
            <form className="relative flex items-center md:flex-row w-full sm:w-fit md:space-x-3 md:space-y-0 ">
              <input
                type="text"
                className="text-white py-3 pl-2 pr-8 bg-transparent w-full sm:w-fit border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
                placeholder="Search"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <svg
                className="object-contain w-4 h-4 absolute right-2 text-inherit "
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                  fill="white"
                />
              </svg>

              {/* <button
                className="flex-shrink-0 px-4  text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button> */}
            </form>
          </div>
        </div>
        <div className="sm:h-[21rem] w-full shadow-2xl rounded-3xl">
          <div className="p-4 sm:p-6 sm:h-[21rem]">
            <div className="sm:flex justify-between gap-4">
              <div
                className="w-full sm:w-[25%] sm:grid gap-2 place-items-center flex sm:grid-cols-2
              overflow-x-auto"
              >
                <img className="  col-span-full" src={balloon} alt="" />
                <img className=" " src={balloon} alt="" />
                <img className=" " src={balloon} alt="" />
              </div>
              <div className="w-full sm:w-[75%] text-lg font-medium text-[#464646] space-y-4">
                <h5>Hot Air Balloon Festival, Alsaka</h5>
                <div className="flex justify-between">
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
                    <span>
                      <svg
                        className="object-contain h-4"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                          fill="#919191"
                        />
                      </svg>
                    </span>
                    Dec 21, 2021
                  </p>
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
                    <span>
                      <svg
                        className="object-contain h-4"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                          fill="#919191"
                        />
                      </svg>
                    </span>
                    Dec 21, 2021
                  </p>
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
                    <span>
                      <svg
                        className="object-contain h-4"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                          fill="#919191"
                        />
                      </svg>
                    </span>
                    Dec 21, 2021
                  </p>
                </div>
                <p className="text-sm text-[#585858] h-[9rem] overflow-auto scrollbar-thin scrollbar-thumb-gray-200">
                  A balloon release is a ceremonial event in which a number of
                  hydrogen- or helium-filled balloons are unleashed into the
                  sky. Balloon releases can be done as a prayer ceremony, to
                  create a photo opportunity, to raise awareness of a cause or
                  campaign, or as a competitive long-distance race.
                </p>
                <div className="flex w-full justify-between gap-6 mt-2 h-fit">
                  <div className="text-sm text-white">
                    <Button fullWidth type={"button"}>
                      Show more
                    </Button>
                  </div>
                  <div className="text-sm text-white">
                    <Button fullWidth type={"button"}>
                      Add Items
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
