import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const BusinessTable = ({ rows }) => {
  const navigate = useNavigate();
  const { businesses } = useStateContext();
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="w-full sm:max-w-[720px] sm:mr-auto sm:ml-auto xl:ml-auto xl:mr-0 ">
      <div className="">
        <div className="mb-0 xl:mb-2 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl text-[#494949] font-semibold leading-tight">
            Businesses
          </h2>
          <div
            onClick={() => {
              navigate("/business");
            }}
            className="mt-6 sm:mt-0 text-end cursor-pointer"
          >
            <p className="font-semibold text-[#494949]">See all</p>
          </div>
        </div>
        <div className="h-[19rem] min-w-80 w-full inline-block shadow-2xl rounded-3xl bg-primary-500">
          <div className="px-2 sm:px-6">
            <div className="pt-4 pb-2 px-0 sm:px-4 w-full grid grid-cols-5 text-lg text-white font-medium">
              <h3 className="col-span-2 text-left">Name</h3>
              <h3 className="col-span-2 text-center hidden lg:block">
                Subscription Rem
              </h3>
              <h3 className="col-span-2 text-center block lg:hidden">
                Subscription
              </h3>
              <h3 className="col-span-1 text-right">{""}</h3>
            </div>
            <div className="h-[14.65rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 ">
              {businesses?.map((business) => {
                return (
                  <div
                    key={business.id}
                    className="mb-1 px-0 sm:px-4 rounded bg-[#024D90] w-full grid grid-cols-5 text-sm text-white font-medium"
                  >
                    <div className="col-span-2 flex items-center gap-2">
                      <img
                        className="object-contain h-8"
                        src={profile}
                        alt=""
                      />
                      <p className="py-3 text-left">{business.name}</p>
                    </div>
                    <p className="col-span-2 py-3 text-center">
                      {business.subscription}
                    </p>
                    <p className="col-span-1  py-3 text-right">...</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;
