'use client';

import { useState } from 'react';
import { StepOne } from '@/components/StepOne';
import { StepTwo } from '@/components/StepTwo';
import { StepThree } from '@/components/StepThree';
import { Submit } from '@/components/Submit';

const FormBody = ({ currentStep, setCurrentStep, form, setForm }) => {
  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} form={form} setForm={setForm} />;
  }
  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} form={form} setForm={setForm} />;
  }
  if (currentStep === 3) {
    return <StepThree setCurrentStep={setCurrentStep} form={form} setForm={setForm} />;
  }
  if (currentStep === 4) {
    return <Submit setCurrentStep={setCurrentStep} form={form} setForm={setForm} />;
  }
};
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    userName: '',
    date: '',
    profile: '',
  });

  return (
    <div className="w-screen h-screen bg-[#efefef]">
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}
