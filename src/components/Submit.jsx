import { Right } from "@/components/Right";
import { Left } from "@/components/Left";

export const Submit = ({ setCurrentStep, form }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[680px] h-[755px] bg-[#FFFFFF] rounded-[8px] p-[32px]">
        <h1 className="text-[black] text-[20px]">
          Thank you for submitting your information!
        </h1>
        <div className="mt-[20px]">
          <div className="w-full h-[100px] bg-[#ededed92] rounded-[10px] p-[10px]">
            <div className="text-[black] text-[20px]">Your Name:</div>
            <div className="text-[black]">{form.firstName}</div>
            <div className="text-[black]">{form.lastName}</div>
          </div>
          <div className="w-full h-[100px] bg-[#ededed92] rounded-[10px] p-[10px] mt-2">
            <div className="text-[black] text-[20px]">Your Username:</div>
            <div className="text-[black]">{form.userName}</div>
          </div>
          <div className="w-full h-[100px] bg-[#ededed92] rounded-[10px] p-[10px] mt-2">
            <div className="text-[black] text-[20px]">Your Phone Number:</div>
            <div className="text-[black]">{form.phone}</div>
          </div>
          <div className="w-full h-[100px] bg-[#ededed92] rounded-[10px] p-[10px] mt-2">
            <div className="text-[black] text-[20px]">Your Date of Birth:</div>
            <div className="text-[black]">{form.date}</div>
          </div>
          <div className="w-full h-[400px] flex justify-center mt-[10px]">
            <img
              src={URL.createObjectURL(form.profile)}
              className="w-[400px] h-[200px]  flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
