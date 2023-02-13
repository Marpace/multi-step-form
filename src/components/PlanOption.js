function PlanOption(props) {
  return (
    <label className={`plan-item ${props.chosenPlan === "Arcade" ? "checked-option" : ""}`}>
          <input 
            onChange={handleRadioChange}
            className="radio-input"  
            name="plan-one" 
            type="radio" 
            value="Arcade" 
            checked={props.chosenPlan === "arcade"}>
          </input>  
          <img className="plan-item__image" src="./assets/images/icon-arcade.svg" alt="orange joystick icon"></img>
          <div className="plan-item__text">
            <p className="plan-name">Arcade</p>
            <p className="plan-price">{props.isYearly ? "$90/yr" : "$9/mo"}</p>
            <p className={`plan-deal ${props.isYearly ? "" : "hidden"}`}>2 months free</p>
          </div>
        </label>
  )
}


export default PlanOption;