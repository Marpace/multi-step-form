function FormSteps(props) {

  return (
    <div className="form-steps">
      <div onClick={() => props.setCurrentStep(1)} className="form-steps__item">
        <span className={`step-number ${props.currentStep === 1 ? "step-active" : ""}`}>1</span>
        <div>
          <p className="step-line-one">STEP 1</p>
          <p className="step-line-two">YOUR INFO</p>
        </div>
      </div>
      <div onClick={() => props.setCurrentStep(2)} className="form-steps__item">
        <span className={`step-number ${props.currentStep === 2 ? "step-active" : ""}`}>2</span>
        <div>
          <p className="step-line-one">STEP 2</p>
          <p className="step-line-two">SELECT PLAN</p>
        </div>
      </div>
      <div onClick={() => props.setCurrentStep(3)} className="form-steps__item">
        <span className={`step-number ${props.currentStep === 3 ? "step-active" : ""}`}>3</span>
        <div>
          <p className="step-line-one">STEP 3</p>
          <p className="step-line-two">ADD-ONS</p>
        </div>
      </div>
      <div onClick={() => props.setCurrentStep(4)} className="form-steps__item">
        <span className={`step-number ${props.currentStep === 4 ? "step-active" : ""}`}>4</span>
        <div>
          <p className="step-line-one">STEP 4</p>
          <p className="step-line-two">SUMMARY</p>
        </div>
      </div>
    </div>
  )
}

export default FormSteps;