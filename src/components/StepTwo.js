import {plans} from "../data";

function StepTwo(props) {

  function handleRadioChange(e) {
    props.setChosenPlan(plans[e.target.value])
  }

  function handleCheckboxChange() {
    props.setIsYearly( prev => prev ? false : true)
  }

  return (
    <div className={`step step-two ${props.currentStep === 2 ? "" : "hidden"}`}>

      <h1 className="step__heading">Select your plan</h1>
      <p className="step__text">You have the option of monthly or yearly billing</p>

      <div className="plans">

        {plans.map( plan => (
          <label key={plan.name} className={`plan-item ${props.chosenPlan === plan ? "checked-option" : ""}`}>
            <input 
              onChange={handleRadioChange}
              className="radio-input"  
              type="radio" 
              value={plans.indexOf(plan)} 
              checked={props.chosenPlan === plan}>
            </input>  
            <img className="plan-item__image" src={plan.imageSrc} alt={plan.imageAlt}></img>
            <div className="plan-item__text">
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">{props.isYearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
              <p className={`plan-deal ${props.isYearly ? "" : "hidden"}`}>{plan.deal}</p>
            </div>
          </label>
        ))}

      </div>

      <div className="billing-frequency">
        <span className={`billing-frequency__text ${props.isYearly ? "text--gray" : ""}`}>Monthly</span>
        <label className="switch">
          <input onChange={handleCheckboxChange} type="checkbox" checked={props.isYearly}></input>
          <span className="slider"></span>
        </label>
        <span className={`billing-frequency__text ${props.isYearly ? "" : "text--gray"}`}>Yearly</span>
      </div>

    </div>
  )
}


export default StepTwo;