import React, { useState } from "react";
import profile from "../assets/images/profile.png";
// import { useStateContext } from "../contexts/ContextProvider";

const UsersTable = ({ rows }) => {
  // const { users } = useStateContext();

  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="w-full sm:max-w-[720px] sm:mr-auto sm:ml-auto xl:mr-auto xl:ml-0">
      <div className="">
        <div className="mb-0 xl:mb-2 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl text-[#494949] font-semibold leading-tight">
            Customers
          </h2>
          <div className="mt-6 sm:mt-0 text-end">
            <p className="font-semibold text-[#494949]">See all</p>
          </div>
        </div>
        <div className="h-[19rem] min-w-80 w-full inline-block shadow-2xl rounded-3xl">
          <div className="px-2 sm:px-6">
            <div className="py-4 px-0 sm:px-4 w-full grid grid-cols-3 text-lg text-black font-medium">
              <h3 className="text-left">Name</h3>
              <h3 className="text-center">Email</h3>
              <h3 className="text-right">Join Date</h3>
            </div>
            <div className="h-[14rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 ">
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
              <div className="mb-1 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-3 text-base text-black font-medium">
                <div className="flex items-center gap-2">
                  <img className="object-contain h-8" src={profile} alt="" />
                  <p className="py-3 text-left">Name</p>
                </div>
                <p className="py-3 text-center">Email</p>
                <p className="py-3 text-right">Join Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
