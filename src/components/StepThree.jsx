export const StepThree = ({ setCurrentStep }) => {
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
              <h1 className="text-[#334155] mt-[40px]">Date of Birth</h1>

              <input
                type="date"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-[#0CA5E9] focus:border-[0px] mt-[10px] text-[black] p-[12px]"
              />
            </div>
            <div className="w-[416px] flex">
              <button
                onClick={() => setCurrentStep(2)}
                className="w-[25%] h-[44px] bg-[#FFFFFF] text-[black] border-[black] border-[1px] flex justify-center items-center rounded-[6px] mt-[42px] mr-[5px]  hover:bg-[#202124] hover:text-[white]"
              >
                <img src="left.png" className="w-[8px] mr-[10px]"/> Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="w-[70%] h-[44px] bg-[#D6D8DB] text-[#A9ACAF] flex justify-center items-center rounded-[6px] mt-[42px] hover:bg-[#202124] hover:text-[white]"
              >
                Submit 3/3
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
