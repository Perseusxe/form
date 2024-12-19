import { Right } from "@/components/Right";
import { Left } from "@/components/Left";
import { useState } from "react";

export const StepTwo = ({ setCurrentStep, form, setForm }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailInvalid(value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    setForm({ ...form, email: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setPhoneInvalid(value && value.length < 7);
      setForm({ ...form, phone: value });
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordInvalid(value && value.length < 8);
    setForm({ ...form, password: value });
  };

  const handleRepeatPasswordChange = (e) => {
    const value = e.target.value;
    setRepeatPassword(value);
    setPasswordMismatch(value && value !== password);
    setForm({ ...form, repeatPassword: value });
  };

  const canContinue =
    form.email &&
    form.phone &&
    form.password &&
    form.repeatPassword &&
    !passwordInvalid &&
    !passwordMismatch &&
    !emailInvalid &&
    !phoneInvalid;

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
              <h1 className="text-[#334155] mt-[40px]">Email</h1>
              <input
                type="email"
                placeholder="ex: JohnDoe@gmail.com"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
                onChange={handleEmailChange}
                value={form.email}
              />
              {emailInvalid && email && (
                <p className="text-red-500 text-[12px] mt-[4px]">
                  Please enter a valid email address (e.g., example@domain.com).
                </p>
              )}
            </div>
            <div>
              <h1 className="text-[#334155] mt-[20px]">Phone Number</h1>
              <input
                type="text"
                placeholder="88087277"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
                onChange={handlePhoneChange}
                value={form.phone}
              />
              {phoneInvalid && phone && (
                <p className="text-red-500 text-[12px] mt-[4px]">
                  Please enter a valid phone number (at least 7 digits).
                </p>
              )}
            </div>
            <div>
              <h1 className="text-[#334155] mt-[20px]">Password</h1>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
                onChange={handlePasswordChange}
                value={form.password}
              />
              {passwordInvalid && password && (
                <p className="text-red-500 text-[12px] mt-[4px]">
                  Password must be at least 8 characters.
                </p>
              )}
            </div>
            <div>
              <h1 className="text-[#334155] mt-[20px]">Confirm Password</h1>
              <input
                type="password"
                placeholder="Repeat your password"
                className="w-[416px] h-[38px] border-[#CBD5E1] border-[1px] rounded-[8px] outline-[#0CA5E9] mt-[10px] text-[black] p-[12px]"
                onChange={handleRepeatPasswordChange}
                value={form.repeatPassword}
              />
              {passwordMismatch && repeatPassword && (
                <p className="text-red-500 text-[12px] mt-[4px]">
                  Passwords do not match.
                </p>
              )}
            </div>
            <div className="w-[416px] flex">
              <button
                onClick={() => setCurrentStep(1)}
                className=" w-[25%] h-[44px] bg-[#FFFFFF] text-[black] border-[black] border-[1px] flex justify-center items-center rounded-[6px] mt-[42px] mr-[5px] hover:bg-[#202124] hover:text-[white]"
              >
                <Left /> <span className="ml-4">Back</span>
              </button>
              <button
                onClick={() => canContinue && setCurrentStep(3)}
                className={` w-[70%] h-[44px] ${
                  canContinue
                    ? "bg-[#202124] text-[white]"
                    : "bg-[#D6D8DB] text-[#A9ACAF]"
                } flex justify-center items-center rounded-[6px] mt-[42px] group`}
                disabled={!canContinue}
              >
                <span className="mr-4">Continue 2/3</span>
                <Right />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
