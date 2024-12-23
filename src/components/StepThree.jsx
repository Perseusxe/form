import { Right } from "@/components/Right";
import { Left } from "@/components/Left";
import { useState } from "react";

export const StepThree = ({ setCurrentStep, form, setForm }) => {
  const [date, setDate] = useState("");
  const [profilePreview, setProfilePreview] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0"); 
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setForm({ ...form, date: value });
    setDate(value);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfilePreview(previewUrl);
      setForm({ ...form, profile: file });
    }
  };

  const canContinue = form.date && form.profile;

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-[480px] h-[655px] bg-[#FFFFFF] rounded-[8px] p-[32px]">
          <div>
            <img src="Logo.png" className="w-[60px] h-[60px]" alt="Logo" />
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
                max={getCurrentDate()} // Restrict dates from today onward
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
                onChange={handleDateChange}
                value={form.date}
              />
            </div>
            <div>
              <h1 className="text-[#334155] mt-4 mb-3">Profile Image</h1>
              <div className="w-[416px] h-[180px] bg-[#7F7F800D] rounded-[10px] flex justify-center items-center">
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={handleProfileChange}
                />
                <label
                  htmlFor="file"
                  className="w-full h-full flex justify-center items-center text-[black] cursor-pointer border-0 border-[#CBD5E1] text-center"
                >
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile Preview"
                      className="w-full h-full "
                    />
                  ) : (
                    <div className="flex-col flex justify-center items-center">
                      <img src="Upload.png" alt="Upload Icon" />
                      <span>Add Image</span>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <div className="w-[416px] flex">
              <button
                onClick={() => setCurrentStep(2)}
                className="group w-[25%] h-[44px] bg-[#FFFFFF] text-[black] border-[black] border-[1px] flex justify-center items-center rounded-[6px] mt-[42px] mr-[5px] hover:bg-[#202124] hover:text-[white]"
              >
                <Left /> <span className="ml-4">Back</span>
              </button>
              <button
                onClick={() => canContinue && setCurrentStep(4)}
                className="group w-[70%] h-[44px] bg-[#D6D8DB] text-[#A9ACAF] flex justify-center items-center rounded-[6px] mt-[42px] hover:bg-[#202124] hover:text-[white]"
                disabled={!canContinue}
              >
                <span className="mr-4">Submit 3/3</span>
                <Right />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
