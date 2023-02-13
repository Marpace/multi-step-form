import { useEffect, useState } from "react"; 

function StepFour(props) {

  const [totalPrice, setTotalPrice] = useState();

  function goToPlans() {
    props.setCurrentStep(2);
  }

  useEffect(() => {
    function calculateTotal() {
      if(props.chosenPlan) {
        const total = []
        let planPrice;
        if(props.isYearly) {
          planPrice = Number(props.chosenPlan.yearlyPrice.match(/\d/g).join(""))
          props.chosenAddons.forEach(addon => {
              const price = Number(addon.yearlyPrice.match(/\d/g).join(""));
              total.push(price);
          });
        } else {
          planPrice = Number(props.chosenPlan.monthlyPrice.match(/\d/g).join(""))
          props.chosenAddons.forEach(addon => {
            const price = Number(addon.monthlyPrice.match(/\d/g).join(""));
            total.push(price);
          });
        }
        total.push(planPrice)
        setTotalPrice(total.reduce((a, b) => a + b, 0))
      }
    }

    calculateTotal()
  }, [props.chosenPlan, props.chosenAddons, props.isYearly])

  if(props.chosenPlan) {
    return (
      <div className={`step step-four ${props.currentStep === 4 ? "" : "hidden"}`}>
  
        <h1 className="step__heading">Finishing up</h1>
        <p className="step__text">Make sure everything looks OK before confirming</p>
  
        <div className="summary">
          <div className="summary__plan">
            <span className="summary__plan-name">{`${props.chosenPlan.name} (${props.isYearly ? "Yearly" : "Monthly"})`}</span>
            <span onClick={goToPlans} className="summary__plan-change">Change</span>
            <span className="summary__plan-price">{props.isYearly ? props.chosenPlan.yearlyPrice : props.chosenPlan.monthlyPrice}</span>
          </div>
          <hr className="summary__hr"></hr>

          <div className="summary__addons">
            {props.chosenAddons.map(addon => (
              <div key={addon.name} className="summary__addons-item">
                <span>{addon.name}</span>
                <span>{props.isYearly ? addon.yearlyPrice : addon.monthlyPrice}</span>
              </div>
            ))}
          </div>

          <div className={`no-addons ${props.chosenAddons.length <= 0 ? "" : "hidden"}`}>
              <p>No addons selected</p>
          </div>
        </div>
        
        <div className="total">
          <span className="total__title">{`Total (${props.isYearly ? "pre year" : "per month"})`}</span>
          <span className="total__price">{`$${totalPrice}/${props.isYearly ? "yr" : "mo"}`}</span>
        </div>
  
      </div>
    )  
  } else {
    return (
      <div className={`step step-four ${props.currentStep === 4 ? "" : "hidden"}`}>

        <h1 className="step__heading">Finishing up</h1>
        <p className="step__text">Make sure everything looks OK before confirming</p>

        <div className="choose-plan summary">
          <span>Please choose a plan</span>
          <span onClick={goToPlans}>see plans</span>
        </div>
      </div>
    )
  }

  
}


export default StepFour;