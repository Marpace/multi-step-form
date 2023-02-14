import { useState } from "react";
import FormNavigation from "./components/FormNavigation";
import FormSteps from "./components/FormSteps";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import ThankYou from "./components/ThankYou";



function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [chosenPlan, setChosenPlan] = useState()
  const [chosenAddons, setChosenAddons] = useState([]);

  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [fieldsRequired, setFieldsRequired] = useState(false);


  return (
    <main>
      <form className="form" id="multi-step-form">
      <FormSteps 
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

        <StepOne 
          currentStep={currentStep}
          nameValue={nameValue}
          emailValue={emailValue}
          phoneValue={phoneValue}
          fieldsRequired={fieldsRequired}
          setNameValue={setNameValue}
          setEmailValue={setEmailValue}
          setPhoneValue={setPhoneValue}
        />

        <StepTwo 
          currentStep={currentStep} 
          isYearly={isYearly}
          chosenPlan={chosenPlan}
          setChosenPlan={setChosenPlan}
          setIsYearly={setIsYearly}
        />

        <StepThree 
          currentStep={currentStep} 
          isYearly={isYearly} 
          chosenAddons={chosenAddons}
          setChosenAddons={setChosenAddons}
        />

        <StepFour 
          currentStep={currentStep}
          chosenPlan={chosenPlan} 
          chosenAddons={chosenAddons}
          isYearly={isYearly}
          setCurrentStep={setCurrentStep}
        />

        <ThankYou 
          currentStep={currentStep}
        />

      <FormNavigation 
        currentStep={currentStep}
        chosenPlan={chosenPlan}
        nameValue={nameValue}
        emailValue={emailValue}
        phoneValue={phoneValue}
        setFieldsRequired={setFieldsRequired}
        setCurrentStep={setCurrentStep}
      />

      </form>
    </main>
  );
}

export default App;
