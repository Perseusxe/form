import {Right} from '@/components/Right'
import {Left} from '@/components/Left'
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
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9]  mt-[10px] text-[black] p-[12px]"
              />
              <div>
                <h1 className='text-[#334155] mt-4 mb-3'>Profile Image</h1>
              <div className='w-[416px] h-[180px] bg-[#7F7F800D] rounded-[10px]'>
              <input
              id='file'
                type="file"
                className='hidden'
              />
              <label htmlFor="file"
              className="w-full h-full flex justify-center items-center text-[black] cursor-pointer border-0 border-[#CBD5E1] text-center">
                <div className='flex-col flex justify-center items-center'>
                <img src="Upload.png"/>
                <span>Add Image</span>
                </div>
              </label>
              </div>
              </div>
            </div>
            <div className="w-[416px] flex">
              <button
                onClick={() => setCurrentStep(2)}
                className="group w-[25%] h-[44px] bg-[#FFFFFF] text-[black] border-[black] border-[1px] flex justify-center items-center rounded-[6px] mt-[42px] mr-[5px]  hover:bg-[#202124] hover:text-[white]"
              >
                <Left /> <span className='ml-4'>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className=" group w-[70%] h-[44px] bg-[#D6D8DB] text-[#A9ACAF] flex justify-center items-center rounded-[6px] mt-[42px] hover:bg-[#202124] hover:text-[white]"
              >
                <span className=" mr-4"> Submit 3/3 </span>
              <Right />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
