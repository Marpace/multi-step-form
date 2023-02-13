import { addons } from "../data";

function StepThree(props) {

  function handleAddonChange(e) {
    props.setChosenAddons(prev => {
      const addon = addons[e.target.value]
      if(prev.includes(addon)) return prev.filter(item => item !== addon);
      else return [...prev, addon]
    }) 
  }


 
  return (
    <div className={`step step-three ${props.currentStep === 3 ? "" : "hidden"}`}>

      <h1 className="step__heading">Pick addons</h1>
      <p className="step__text">Addons help enhance your gaming experience</p>

      <div className="addons">

        {addons.map( addon => (
          <label key={addon.name} className={`addons-item ${props.chosenAddons.includes(addon) ? "addon-chosen" : ""}`}>
            <input 
              onChange={handleAddonChange} 
              type="checkbox" 
              checked={props.chosenAddons.includes(addon)} 
              value={addons.indexOf(addon)}></input>
            <div className={`addon-checkbox ${props.chosenAddons.includes(addon) ? "addon-checked" : ""}`}>
              <img src="./assets/images/icon-checkmark.svg" alt="check mark icon"></img>
            </div>
            <div className="addon-text">
              <p className="addon-name">{addon.name}</p>
              <p className="addon-description">{addon.description}</p>
            </div>
            <span className="addon-price">{props.isYearly ? addon.yearlyPrice : addon.monthlyPrice}</span>
          </label>
        ))}

      </div>
    </div>
  )
}

export default StepThree;