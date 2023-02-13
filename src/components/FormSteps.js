function FormSteps(props) {

  function handleStepClick(e) {
    props.setCurrentStep(Number(e.target.id))
  }

  return (
    <div className="form-steps">
      <div onClick={handleStepClick} id="1" className="form-steps__item">
        <span id="1" className={`step-number ${props.currentStep === 1 ? "step-active" : ""}`}>1</span>
        <div>
          <p id="1" className="step-line-one">STEP 1</p>
          <p id="1" className="step-line-two">YOUR INFO</p>
        </div>
      </div>
      <div onClick={handleStepClick} id="2" className="form-steps__item">
        <span id="2" className={`step-number ${props.currentStep === 2 ? "step-active" : ""}`}>2</span>
        <div>
          <p id="2" className="step-line-one">STEP 2</p>
          <p id="2" className="step-line-two">SELECT PLAN</p>
        </div>
      </div>
      <div onClick={handleStepClick} id="3" className="form-steps__item">
        <span id="3" className={`step-number ${props.currentStep === 3 ? "step-active" : ""}`}>3</span>
        <div>
          <p id="3" className="step-line-one">STEP 3</p>
          <p id="3" className="step-line-two">ADD-ONS</p>
        </div>
      </div>
      <div onClick={handleStepClick} id="4" className="form-steps__item">
        <span id="4" className={`step-number ${props.currentStep === 4 ? "step-active" : ""}`}>4</span>
        <div>
          <p id="4" className="step-line-one">STEP 4</p>
          <p id="4" className="step-line-two">SUMMARY</p>
        </div>
      </div>
      
      {/* <span 
        id="1"
        onClick={handleStepClick} 
        className={`form-steps__item ${props.currentStep === 1 ? "step-active" : ""}`}>1</span>
      <span 
        id="2"
        onClick={handleStepClick} 
        className={`form-steps__item ${props.currentStep === 2 ? "step-active" : ""}`}>2</span>
      <span 
        id="3"
        onClick={handleStepClick} 
        className={`form-steps__item ${props.currentStep === 3 ? "step-active" : ""}`}>3</span>
      <span 
        id="4"
        onClick={handleStepClick} 
        className={`form-steps__item ${props.currentStep === 4 ? "step-active" : ""}`}>4</span> */}
    </div>
  )
}

export default FormSteps;