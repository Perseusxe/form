'use client';

import { useState } from 'react';
import { StepOne } from '@/components/StepOne';
import { StepTwo } from '@/components/StepTwo';
import { StepThree } from '@/components/StepThree';

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
