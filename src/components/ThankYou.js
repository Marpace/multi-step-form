function ThankYou(props) {
  return (
    <div className={`step thank-you ${props.currentStep === 5 ? "" : "hidden"}`}>
      <img className="thank-you__image" src="./assets/images/icon-thank-you.svg" alt="check mark icon"></img>
      <h1 className="thank-you__heading">Thank you!</h1>
      <p className="thank-you__text">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default ThankYou;