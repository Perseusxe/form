"use client";

import { useState } from "react";
import { Right } from "@/components/Right";
export const StepOne = ({ setCurrentStep, form, setForm }) => {

  const [nameInvalid, setNameInvalid] = useState(false);

  const validateName = (name) => {
    if (name === "") {
      return true;
    }
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, firstName: value });
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, lastName: value });
  };

  const handleUserNameChange = (e) => {
    const { value } = e.target;
 
    setForm({ ...form, userName: value });
  };

  const canContinue = form.firstName && form.lastName && form.userName && validateName(form.firstName) &&
  validateName(form.lastName);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[480px] h-[655px] bg-[#FFFFFF] rounded-[8px] p-[32px]">
        <div>
          <img src="Logo.png" className="w-[60px] h-[60px]" />
          <h1 className="text-[#202124] text-[26px] font-[600] leading-[31px]">
            Join Us! 😎
          </h1>
          <h2 className="text-[#8E8E8E] text-[18px] font-[400] leading-[22px]">
            Please provide all current information accurately.
          </h2>
          <div>
            <h1 className="text-[#334155] mt-[40px]">First Name</h1>

            <input
              type="text"
              placeholder="ex: John"
              className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9]  mt-[10px] text-[black] p-[12px]"
              onChange={handleFirstNameChange}
              value={form.firstName}
            />
            {!validateName(form.firstName) && (
              <p className="text-red-500 text-[12px]">
                Invalid name. Only letters are allowed.
              </p>
            )}
          </div>
          <div>
            <h1 className="text-[#334155] mt-[20px]">Last Name</h1>

            <input
              type="text"
              placeholder="Doe"
              className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
              onChange={handleLastNameChange}
              value={form.lastName}
            />
            {!validateName(form.lastName) && (
              <p className="text-red-500 text-[12px]">
                Invalid name. Only letters are allowed.
              </p>
            )}
          </div>
          <div>
            <h1 className="text-[#334155] mt-[20px]">Username</h1>

            <input
              type="text"
              placeholder="JohnDoe123@!"
              className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
              onChange={handleUserNameChange}
              value={form.userName}
            />
          </div>
          <button
            onClick={() => { 
              canContinue &&
              setCurrentStep(2);
            
            }}
            className="group w-[416px] h-[44px] bg-[#D6D8DB] text-[#A9ACAF] flex justify-center items-center rounded-[6px] mt-[100px]  hover:bg-[#202124] hover:text-[white]"
          >
            <span className=" mr-4"> Continue 1/3 </span>
            <Right />
          </button>
        </div>
      </div>
    </div>
  );
};
