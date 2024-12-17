'use client'

import { useState } from 'react'
import {StepOne} from '@/components/StepOne';
import {StepTwo} from '@/components/StepTwo';
import {StepThree} from '@/components/StepThree';


const FormBody = ({currentStep, setCurrentStep})=>{

  if( currentStep ===1){
    return <StepOne setCurrentStep={setCurrentStep}/>
  }
  if( currentStep ===2){
    return <StepTwo setCurrentStep={setCurrentStep} />
  }
  if( currentStep ===3){
    return <StepThree setCurrentStep={setCurrentStep} />
  }

}
export default function Home() {

  const [currentStep, setCurrentStep] = useState(1)
  return (

    <div className="w-screen h-screen bg-[#efefef]">
    <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  );
}
