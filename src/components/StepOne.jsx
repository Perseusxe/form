export const StepOne = ({ setCurrentStep }) => {
  return (
    <>
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
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-[#0CA5E9] focus:border-[0px] mt-[10px] text-[black] p-[12px]"
              />
            </div>
            <div>
              <h1 className="text-[#334155] mt-[20px]">Last Name</h1>

              <input
                type="text"
                placeholder="Doe"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-[#0CA5E9] focus:border-[0px] mt-[10px] text-[black] p-[12px]"
              />
            </div>
            <div>
              <h1 className="text-[#334155] mt-[20px]">Username</h1>

              <input
                type="text"
                placeholder="JohnDoe"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-[#0CA5E9] focus:border-[0px] mt-[10px] text-[black] p-[12px]"
              />
            </div>
            <button
              onClick={() => setCurrentStep(2)}
              className="w-[416px] h-[44px] bg-[#D6D8DB] text-[#A9ACAF] flex justify-center items-center rounded-[6px] mt-[100px] hover:bg-[#202124] hover:text-[white]"
            >
              Continue 1/3 <img src="right.png" className="w-[8px] ml-[10px]"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
