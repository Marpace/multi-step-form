function FormNavigation(props) {

  function handleNextClick(e) {
    e.preventDefault();
    props.setCurrentStep( prev => {
      return prev >= 4 ? 4 : prev + 1;
    })
  }

  function handleBackClick() {
    props.setCurrentStep( prev => {
      return prev <= 1 ? 1 : prev - 1
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if(props.nameValue === "" ||
      props.emailValue === "" || 
      props.phoneValue === "") {
        props.setFieldsRequired(true);
        props.setCurrentStep(1)
      } else {
        props.setCurrentStep(5);
      }
  }


  return (
    <div className="form-navigation">
      <span onClick={handleBackClick} className={`form-navigation__back ${props.currentStep >= 2 ? "" : "invisible"}`}>Go Back</span>
      <button 
        onClick={handleNextClick} 
        className={`form-navigation__next ${props.currentStep >= 4 ? "hidden" : ""}`}>
        Next Step</button>
      <button 
        onClick={handleSubmit} 
        className={`form-navigation__confirm ${props.currentStep === 4 && props.chosenPlan ? "" : "hidden"}`}
        type="submit" 
      >Confirm</button>
    </div>
  )
}


export default FormNavigation;
