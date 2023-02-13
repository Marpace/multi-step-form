
function StepOne(props) {


  function handleNameChange(e) {
    props.setNameValue(e.target.value)
  }

  function handleEmailChange(e) {
    props.setEmailValue(e.target.value)
  }

  function handlePhoneChange(e) {
    props.setPhoneValue(e.target.value)
  }



  return (
    <div className={`step step-one ${props.currentStep === 1 ? "" : "hidden"}`}>

      <h1 className="step__heading">Personal info</h1>
      <p className="step__text">Please provide your name, email address and phone number</p>

      <div className={`step-one__input-container ${props.fieldsRequired && props.nameValue === "" ? "field-required" : ""}`}>
        <label className="step-one-label" htmlFor="name">
          <span>Name</span>
          <span>This field is required</span>
        </label>
        <input 
          name="name"
          onChange={handleNameChange} 
          className="step-one-input" 
          type="text" 
          placeholder="e.g. Stephen King" 
          value={props.nameValue}
          ></input>
      </div>

      <div className={`step-one__input-container ${props.fieldsRequired && props.emailValue === "" ? "field-required" : ""}`}>
        <label className="step-one-label" htmlFor="email">
          <span>Email</span>
          <span>This field is required</span>
        </label>
        <input 
          name="email"
          onChange={handleEmailChange} 
          className="step-one-input" 
          type="email" 
          placeholder="e.g. stephenking@lorem.com" 
          value={props.emailValue}
          ></input>
      </div>

      <div className={`step-one__input-container ${props.fieldsRequired && props.phoneValue === "" ? "field-required" : ""}`}>
        <label className="step-one-label" htmlFor="phone">
          <span>Phone</span>
          <span>This field is required</span>
        </label>
        <input 
          name="phone"
          onChange={handlePhoneChange} 
          className="step-one-input" 
          type="number" 
          placeholder="e.g. +1 234 567 890" 
          value={props.phoneValue}
          ></input>
      </div>

    </div>
  )
}


export default StepOne;